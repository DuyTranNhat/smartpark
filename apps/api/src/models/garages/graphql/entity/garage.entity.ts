import { Field, ObjectType } from '@nestjs/graphql'
import { Garage as GarageType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Garage implements RestrictProperties<Garage,GarageType> {
    id: number
    createdAt: Date
    updatedAt: Date

    @Field({ nullable: true })
    displayName: string | null

    @Field({ nullable: true })
    description: string | null

    @Field(() => [String])
    images: string[]

    companyId: number
}
