import { Field, InputType, PartialType, Int } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class BookingTimelineWhereUniqueInput {
  @Field(() => Int)
  id!: number
}

@InputType()
export class BookingTimelineWhereInputStrict implements RestrictProperties<BookingTimelineWhereInputStrict, Prisma.BookingTimelineWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: BookingTimelineWhereInput[]
  OR: BookingTimelineWhereInput[]
  NOT: BookingTimelineWhereInput[]
}

@InputType()
export class BookingTimelineWhereInput extends PartialType(
  BookingTimelineWhereInputStrict,
) {}

@InputType()
export class BookingTimelineListRelationFilter {
  every?: BookingTimelineWhereInput
  some?: BookingTimelineWhereInput
  none?: BookingTimelineWhereInput
}

@InputType()
export class BookingTimelineRelationFilter {
  is?: BookingTimelineWhereInput
  isNot?: BookingTimelineWhereInput
}
