import { Company } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CompanyEntity implements RestrictProperties<
  CompanyEntity,
  Company
> {
  @IsInt()
  id: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsOptional()
  @IsString()
  displayName: string | null

  @IsOptional()
  @IsString()
  description: string | null
}
