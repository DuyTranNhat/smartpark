import { CreateValetInput } from './create-valet.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Valet } from '@prisma/client'

@InputType()
export class UpdateValetInput extends PartialType(CreateValetInput) {
  @Field(() => String)
  uid!: Valet['uid']
}
