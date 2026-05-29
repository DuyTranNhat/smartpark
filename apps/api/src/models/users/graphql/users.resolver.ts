import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import * as FindArgs from './dtos/find.args'
import * as CreateUserDto from './dtos/create-user.input'
import * as UpdateUserDto from './dtos/update-user.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import type { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService,
    private readonly prisma: PrismaService) {}

  // @AllowAuthenticated()
  @Mutation(() => User)
  createUser(@Args('createUserInput') args: CreateUserDto.CreateUserInput, 
  // @GetUser() user: GetUserType
) {
    // checkRowLevelPermission(user, args.uid)
    return this.usersService.create(args)
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
