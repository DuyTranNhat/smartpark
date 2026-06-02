import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { ReviewOrderByRelationAggregateInput } from 'src/models/reviews/graphql/dtos/order-by.args'

@InputType()
export class CustomerOrderByWithRelationInputStrict {
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder | Prisma.SortOrderInput
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  User: UserOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  Bookings: BookingOrderByRelationAggregateInput
  @Field(() => ReviewOrderByRelationAggregateInput, { nullable: true })
  Reviews: ReviewOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class CustomerOrderByWithRelationInput extends PartialType(
  CustomerOrderByWithRelationInputStrict,
) {}

@InputType()
export class CustomerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
