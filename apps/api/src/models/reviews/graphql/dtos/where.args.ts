import { Field, InputType, PartialType, Int } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ReviewWhereUniqueInput {
  @Field(() => Int)
  id!: number
}

@InputType()
export class ReviewWhereInputStrict implements RestrictProperties<ReviewWhereInputStrict, Prisma.ReviewWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ReviewWhereInput[]
  OR: ReviewWhereInput[]
  NOT: ReviewWhereInput[]
}

@InputType()
export class ReviewWhereInput extends PartialType(
  ReviewWhereInputStrict,
) {}

@InputType()
export class ReviewListRelationFilter {
  every?: ReviewWhereInput
  some?: ReviewWhereInput
  none?: ReviewWhereInput
}

@InputType()
export class ReviewRelationFilter {
  is?: ReviewWhereInput
  isNot?: ReviewWhereInput
}
