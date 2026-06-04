import { Field, ObjectType } from '@nestjs/graphql'
import { ValetAssignment as ValetAssignmentType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class ValetAssignment implements RestrictProperties<
  ValetAssignment,
  ValetAssignmentType
> {
  bookingId: number
  createdAt: Date
  updatedAt: Date

  @Field({ nullable: true })
  pickupLat: number | null

  @Field({ nullable: true })
  pickupLng: number | null

  @Field({ nullable: true })
  returnLat: number | null

  @Field({ nullable: true })
  returnLng: number | null

  @Field({ nullable: true })
  pickupValetId: string | null

  @Field({ nullable: true })
  returnValetId: string | null
}
