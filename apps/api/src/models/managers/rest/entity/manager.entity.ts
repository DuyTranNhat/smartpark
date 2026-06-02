import { Manager } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManagerEntity implements RestrictProperties<ManagerEntity, Manager> {
	@IsString()
	uid: string

	@IsDate()
	createdAt: Date

	@IsDate()
	updatedAt: Date

	@IsOptional()
	@IsString()
	displayName: string | null

	@IsOptional()
	@IsInt()
	companyId: number | null
}

