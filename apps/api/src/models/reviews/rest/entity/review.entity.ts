import { Review } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ReviewEntity implements RestrictProperties<ReviewEntity, Review> {
	@IsInt()
	id: number

	@IsDate()
	createdAt: Date

	@IsDate()
	updatedAt: Date

	@IsInt()
	rating: number

	@IsOptional()
	@IsString()
	comment: string | null

	@IsString()
	customerId: string

	@IsInt()
	garageId: number
}

