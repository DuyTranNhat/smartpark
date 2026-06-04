import { Booking } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional, IsNumber } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingEntity implements RestrictProperties<
  BookingEntity,
  Booking
> {
  @IsInt()
  id: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsOptional()
  @IsNumber()
  pricePerHour: number | null

  @IsOptional()
  @IsNumber()
  totalPrice: number | null

  @IsDate()
  startTime: Date

  @IsDate()
  endTime: Date

  @IsString()
  vehicleNumber: string

  @IsOptional()
  @IsString()
  phoneNumber: string | null

  @IsOptional()
  @IsString()
  passcode: string | null

  @IsString()
  status: string

  @IsInt()
  slotId: number

  @IsString()
  customerId: string
}
