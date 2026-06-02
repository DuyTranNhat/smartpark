import { Garage } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GarageEntity implements RestrictProperties<GarageEntity, Garage> {
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

	images: string[]

	@IsInt()
	companyId: number
}

