import { Address } from '@prisma/client'
import { IsDate, IsString, IsInt, IsNumber } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AddressEntity implements RestrictProperties<
  AddressEntity,
  Address
> {
  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsInt()
  id: number

  @IsInt()
  garageId: number

  @IsString()
  address: string

  @IsNumber()
  lat: number

  @IsNumber()
  lng: number
}
