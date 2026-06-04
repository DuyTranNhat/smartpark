import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  name?: Prisma.SortOrder
}

@InputType()
export class UserMaxOrderByAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  name?: Prisma.SortOrder
}

@InputType()
export class UserMinOrderByAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  name?: Prisma.SortOrder
}

@InputType()
export class UserOrderByWithRelationInputStrict implements RestrictProperties<
  UserOrderByWithRelationInputStrict,
  Omit<
    Prisma.UserOrderByWithAggregationInput,
    'Credentials' | 'AuthProvider' | 'Admin' | 'image'
  >
> {
  @Field(() => Prisma.SortOrder)
  uid!: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt!: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt!: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name!: Prisma.SortOrder
  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count!: UserCountOrderByAggregateInput

  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max!: UserMaxOrderByAggregateInput

  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min!: UserMinOrderByAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
