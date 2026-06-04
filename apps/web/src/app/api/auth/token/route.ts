import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
  const cookieStore = cookies()
  const nextAuthSession =
    (await cookieStore).get('next-auth.session-token')?.value ?? ''

  return NextResponse.json(nextAuthSession)
}
