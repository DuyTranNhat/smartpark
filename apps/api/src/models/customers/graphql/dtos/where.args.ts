import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args'

@InputType()
export class CustomerWhereUniqueInput {
  @Field(() => String)
  uid!: string
}

@InputType()
export class CustomerWhereInputStrict {
  @Field(() => StringFilter, { nullable: true })
  uid?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  displayName?: StringFilter | null

  @Field(() => UserRelationFilter, { nullable: true })
  User?: UserRelationFilter

  @Field(() => BookingListRelationFilter, { nullable: true })
  Bookings?: Prisma.BookingListRelationFilter

  @Field(() => ReviewListRelationFilter, { nullable: true })
  Reviews?: Prisma.ReviewListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [CustomerWhereInputStrict], { nullable: true })
  AND?: CustomerWhereInputStrict[]

  @Field(() => [CustomerWhereInputStrict], { nullable: true })
  OR?: CustomerWhereInputStrict[]

  @Field(() => [CustomerWhereInputStrict], { nullable: true })
  NOT?: CustomerWhereInputStrict[]
}

@InputType()
export class CustomerWhereInput extends PartialType(CustomerWhereInputStrict) {}

@InputType()
export class CustomerListRelationFilter {
  every?: CustomerWhereInput
  some?: CustomerWhereInput
  none?: CustomerWhereInput
}

@InputType()
export class CustomerRelationFilter {
  is?: CustomerWhereInput
  isNot?: CustomerWhereInput
}
