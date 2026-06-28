'use client'
import { IsLoggedIn } from '@smartpark/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@smartpark/ui/src/components/organisms/IsManager'

export default function Home() {
  return (
    <IsLoggedIn>
      <IsManager>Hello Manager</IsManager>
    </IsLoggedIn>
  )
}