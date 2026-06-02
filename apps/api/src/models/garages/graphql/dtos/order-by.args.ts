import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ManagerOrderByRelationAggregateInput } from 'src/models/managers/graphql/dtos/order-by.args'
import { ValetOrderByRelationAggregateInput } from 'src/models/valets/graphql/dtos/order-by.args'

@InputType()
export class GarageOrderByWithRelationInputStrict
  implements RestrictProperties<GarageOrderByWithRelationInputStrict, Prisma.GarageOrderByWithRelationInput>
{

    @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  Garages: GarageOrderByRelationAggregateInput
  Managers: ManagerOrderByRelationAggregateInput
  Valets: ValetOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class GarageOrderByWithRelationInput extends PartialType(
  GarageOrderByWithRelationInputStrict,
) {}

@InputType()
export class GarageOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
