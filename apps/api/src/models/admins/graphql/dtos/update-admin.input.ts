import { CreateAdminInput } from './create-admin.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Admin } from '@prisma/client'

@InputType()
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  @Field(() => String)
  uid!: Admin['uid']
}
