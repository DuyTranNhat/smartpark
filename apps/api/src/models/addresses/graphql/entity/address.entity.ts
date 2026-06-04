import { Field, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Address implements RestrictProperties<Address, AddressType> {
  createdAt: Date
  updatedAt: Date
  address: string
  lat: number
  lng: number
  id: number
  garageId: number
}
