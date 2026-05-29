import { ArgsType, Field, registerEnumType, PartialType, Int } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UserOrderByWithRelationInput } from './order-by.args'
import { UserWhereInput, UserWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
})

@ArgsType()
class FindManyUserArgsStrict {
  @Field(() => UserWhereInput, { nullable: true })
  where!: UserWhereInput

  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy!: UserOrderByWithRelationInput[]

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor!: UserWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take!: number

  @Field(() => Int, { nullable: true })
  skip!: number

  @Field(() => [Prisma.UserScalarFieldEnum], { nullable: true })
  distinct!: Prisma.UserScalarFieldEnum[]
}

@ArgsType()
export class FindManyUserArgs extends PartialType(
  FindManyUserArgsStrict,
) {}

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: true })
  where!: UserWhereUniqueInput
}