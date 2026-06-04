import { Field, InputType, PartialType, Int } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class CompanyWhereUniqueInput {
  @Field(() => Int)
  id!: number
}

@InputType()
export class CompanyWhereInputStrict implements RestrictProperties<
  CompanyWhereInputStrict,
  Prisma.CompanyWhereInput
> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CompanyWhereInput[]
  OR: CompanyWhereInput[]
  NOT: CompanyWhereInput[]
}

@InputType()
export class CompanyWhereInput extends PartialType(CompanyWhereInputStrict) {}

@InputType()
export class CompanyListRelationFilter {
  every?: CompanyWhereInput
  some?: CompanyWhereInput
  none?: CompanyWhereInput
}

@InputType()
export class CompanyRelationFilter {
  is?: CompanyWhereInput
  isNot?: CompanyWhereInput
}
