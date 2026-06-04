import { CreateVerificationInput } from './create-verification.input'
import { InputType, PartialType, Field, Int } from '@nestjs/graphql'
import { Verification } from '@prisma/client'

@InputType()
export class UpdateVerificationInput extends PartialType(
  CreateVerificationInput,
) {
  @Field(() => Int, { nullable: true })
  garageId?: Verification['garageId']
}
