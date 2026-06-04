import { BookingTimeline } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingTimelineEntity implements RestrictProperties<
  BookingTimelineEntity,
  BookingTimeline
> {
  @IsInt()
  id: number

  @IsDate()
  timestamp: Date

  @IsString()
  status: string

  @IsInt()
  bookingId: number

  @IsOptional()
  @IsString()
  valetId: string | null

  @IsOptional()
  @IsString()
  managerId: string | null
}
