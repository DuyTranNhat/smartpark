import { Valet } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {
  @IsString()
  uid: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsString()
  displayName: string

  @IsOptional()
  @IsString()
  image: string | null

  @IsString()
  licenceID: string

  @IsOptional()
  @IsInt()
  companyId: number | null
}
