import { Field, ObjectType } from '@nestjs/graphql'
import { BookingTimeline as BookingTimelineType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class BookingTimeline implements RestrictProperties<
  BookingTimeline,
  BookingTimelineType
> {
  id: number
  timestamp: Date
  status: string
  bookingId: number

  @Field({ nullable: true })
  valetId: string | null

  @Field({ nullable: true })
  managerId: string | null
}
