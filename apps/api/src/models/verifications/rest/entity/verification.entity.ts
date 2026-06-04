import { Verification } from '@prisma/client'
import { IsDate, IsString, IsInt, IsBoolean } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class VerificationEntity implements RestrictProperties<
  VerificationEntity,
  Verification
> {
  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsBoolean()
  verified: boolean

  @IsString()
  adminId: string

  @IsInt()
  garageId: number
}
