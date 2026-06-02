import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { VerificationListRelationFilter } from 'src/models/verifications/graphql/dtos/where.args'

@InputType()
export class AdminWhereUniqueInput {
  @Field(() => String)
  uid!: string
}

@InputType()
export class AdminWhereInputStrict implements RestrictProperties<AdminWhereInputStrict, Prisma.AdminWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => UserRelationFilter, { nullable: true })
  User: UserRelationFilter

  @Field(() => VerificationListRelationFilter, { nullable: true })
  Verifications: Prisma.VerificationListRelationFilter
  
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [AdminWhereInput], { nullable: true })
  @Field(() => [AdminWhereInputStrict], { nullable: true })
  AND: AdminWhereInputStrict[]

  @Field(() => [AdminWhereInputStrict], { nullable: true })
  OR: AdminWhereInputStrict[]

  @Field(() => [AdminWhereInputStrict], { nullable: true })
  NOT: AdminWhereInputStrict[]
}

@InputType()
export class AdminWhereInput extends PartialType(
  AdminWhereInputStrict,
) {}

@InputType()
export class AdminListRelationFilter {
  every?: AdminWhereInput
  some?: AdminWhereInput
  none?: AdminWhereInput
}

@InputType()
export class AdminRelationFilter {
  is?: AdminWhereInput
  isNot?: AdminWhereInput
}
