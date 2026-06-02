import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { BookingTimelineListRelationFilter } from 'src/models/booking-timelines/graphql/dtos/where.args'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ManagerWhereUniqueInput {
  @Field(() => String)
  uid!: string
}

@InputType()
export class ManagerWhereInputStrict implements RestrictProperties<ManagerWhereInputStrict, Prisma.ManagerWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)
  @Field(() => UserRelationFilter, { nullable: true })
  User?: UserRelationFilter

  @Field(() => StringFilter, { nullable: true })
  uid?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  displayName?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  companyId?: IntFilter
  Company: CompanyRelationFilter
  BookingTimeline: BookingTimelineListRelationFilter

  @Field(() => [ManagerWhereInputStrict], { nullable: true })
  AND?: ManagerWhereInputStrict[]

  @Field(() => [ManagerWhereInputStrict], { nullable: true })
  OR?: ManagerWhereInputStrict[]

  @Field(() => [ManagerWhereInputStrict], { nullable: true })
  NOT?: ManagerWhereInputStrict[]
}

@InputType()
export class ManagerWhereInput extends PartialType(
  ManagerWhereInputStrict,
) {}

@InputType()
export class ManagerListRelationFilter {
  every?: ManagerWhereInput
  some?: ManagerWhereInput
  none?: ManagerWhereInput
}

@InputType()
export class ManagerRelationFilter {
  is?: ManagerWhereInput
  isNot?: ManagerWhereInput
}
