import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import * as FindArgs from './dtos/find.args'
import * as UpdateUserDto from './dtos/update-user.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import type { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { LoginInput, LoginOutput, RegisterWithCredentialsInput, RegisterWithProviderInput } from './dtos/create-user.input'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService,
    private readonly prisma: PrismaService) {}

  @Mutation(() => User)
  async registerWithCredentials(
    @Args('registerWithCredentialsInput')
    args: RegisterWithCredentialsInput,
  ) {
    return this.usersService.registerWithCredentials(args)
  }

   @Mutation(() => User)
  async registerWithProvider(
    @Args('registerWithProviderInput') args: RegisterWithProviderInput,
  ) {
    return this.usersService.registerWithProvider(args)
  }

  @Mutation(() => LoginOutput)
  async login(@Args('loginInput') args: LoginInput) {
    return this.usersService.login(args)
  }

  @AllowAuthenticated()
  @Query(() => User)
  whoami(@GetUser() user: GetUserType) {
    return this.usersService.findOne({ where: { uid: user.uid } })
  }


  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindArgs.FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindArgs.FindUniqueUserArgs) {
    return this.usersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') args: UpdateUserDto.UpdateUserInput, @GetUser() user: GetUserType) {
    const userInfo = await this.prisma.user.findUnique({ where: { uid: args.uid } })
    checkRowLevelPermission(user, user.uid)
    return this.usersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async removeUser(@Args() args: FindArgs.FindUniqueUserArgs, @GetUser() user: GetUserType) {
    const userInfo = await this.prisma.user.findUnique({ where: args.where })
    checkRowLevelPermission(user, userInfo?.uid)
    return this.usersService.remove(args)
  }
}
