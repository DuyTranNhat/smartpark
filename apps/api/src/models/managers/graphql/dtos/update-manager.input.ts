import { CreateManagerInput } from './create-manager.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Manager } from '@prisma/client'

@InputType()
export class UpdateManagerInput extends PartialType(CreateManagerInput) {
  @Field(() => String)
  uid!: Manager['uid']
}
