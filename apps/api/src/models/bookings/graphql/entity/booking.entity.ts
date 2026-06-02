import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Booking as BookingType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.BookingStatus, { name: 'BookingStatus' })

@ObjectType()
export class Booking implements RestrictProperties<Booking,BookingType> {
    id: number
    createdAt: Date
    updatedAt: Date

    @Field({ nullable: true })
    pricePerHour: number | null

    @Field({ nullable: true })
    totalPrice: number | null

    startTime: Date
    endTime: Date
    vehicleNumber: string

    @Field({ nullable: true })
    phoneNumber: string | null

    @Field({ nullable: true })
    passcode: string | null

    @Field(() => $Enums.BookingStatus)
    status: $Enums.BookingStatus

    slotId: number
    customerId: string
}
