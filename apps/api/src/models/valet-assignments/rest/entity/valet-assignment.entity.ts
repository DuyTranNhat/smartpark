import { ValetAssignment } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional, IsNumber } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetAssignmentEntity implements RestrictProperties<
  ValetAssignmentEntity,
  ValetAssignment
> {
  @IsInt()
  bookingId: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsOptional()
  @IsNumber()
  pickupLat: number | null

  @IsOptional()
  @IsNumber()
  pickupLng: number | null

  @IsOptional()
  @IsNumber()
  returnLat: number | null

  @IsOptional()
  @IsNumber()
  returnLng: number | null

  @IsOptional()
  @IsString()
  pickupValetId: string | null

  @IsOptional()
  @IsString()
  returnValetId: string | null
}
