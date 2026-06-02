import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Slot as SlotType } from '@prisma/client'
registerEnumType($Enums.SlotType, { name: 'SlotType' })
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Slot implements RestrictProperties<Slot,SlotType> {
    id: number
    createdAt: Date
    updatedAt: Date

    @Field({ nullable: true })
    displayName: string | null

    pricePerHour: number

    @Field({ nullable: true })
    length: number | null

    @Field({ nullable: true })
    width: number | null

    @Field({ nullable: true })
    height: number | null

    @Field(() => $Enums.SlotType)
  type: $Enums.SlotType
    garageId: number
}
