import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  RestrictProperties,
  StringFilter,
  DateTimeFilter,
} from 'src/common/dtos/common.input'

@InputType()
export class UserWhereUniqueInput {
  @Field({ nullable: true })
  uid!: string
}

@InputType()
export class UserWhereInputStrict implements RestrictProperties<
  UserWhereInputStrict,
  Omit<
    Prisma.UserWhereInput,
    'Credentials' | 'AuthProvider' | 'Admin' | 'image'
  >
> {
  @Field(() => StringFilter, { nullable: true })
  uid!: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt!: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt!: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  name!: StringFilter

  @Field(() => [UserWhereInputStrict], { nullable: true })
  AND!: UserWhereInputStrict[]

  @Field(() => [UserWhereInputStrict], { nullable: true })
  OR!: UserWhereInputStrict[]

  @Field(() => [UserWhereInputStrict], { nullable: true })
  NOT!: UserWhereInputStrict[]
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput
  isNot?: UserWhereInput
}
