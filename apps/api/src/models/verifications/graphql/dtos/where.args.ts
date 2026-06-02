import { Field, InputType, PartialType, Int } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class VerificationWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  garageId!: number
}

@InputType()
export class VerificationWhereInputStrict implements RestrictProperties<VerificationWhereInputStrict, Prisma.VerificationWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)
  @Field(() => [VerificationWhereInputStrict], { nullable: true })
  AND!: VerificationWhereInputStrict[]

  @Field(() => [VerificationWhereInputStrict], { nullable: true })
  OR!: VerificationWhereInputStrict[]

  @Field(() => [VerificationWhereInputStrict], { nullable: true })
  NOT!: VerificationWhereInputStrict[]
}

@InputType()
export class VerificationWhereInput extends PartialType(
  VerificationWhereInputStrict,
) {}

@InputType()
export class VerificationListRelationFilter {
  @Field(() => VerificationWhereInput, { nullable: true })
  every?: VerificationWhereInput

  @Field(() => VerificationWhereInput, { nullable: true })
  some?: VerificationWhereInput

  @Field(() => VerificationWhereInput, { nullable: true })
  none?: VerificationWhereInput
}

@InputType()
export class VerificationRelationFilter {
  @Field(() => VerificationWhereInput, { nullable: true })
  is?: VerificationWhereInput

  @Field(() => VerificationWhereInput, { nullable: true })
  isNot?: VerificationWhereInput
}
