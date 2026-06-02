import { CreateCustomerInput } from './create-customer.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Customer } from '@prisma/client'

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field(() => String)
  uid!: Customer['uid']
}
