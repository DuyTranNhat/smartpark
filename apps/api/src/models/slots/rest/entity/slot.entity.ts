import { Slot } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional, IsNumber } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class SlotEntity implements RestrictProperties<SlotEntity, Slot> {
  @IsInt()
  id: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsOptional()
  @IsString()
  displayName: string | null

  @IsNumber()
  pricePerHour: number

  @IsOptional()
  @IsInt()
  length: number | null

  @IsOptional()
  @IsInt()
  width: number | null

  @IsOptional()
  @IsInt()
  height: number | null

  @IsString()
  type: string

  @IsInt()
  garageId: number
}
