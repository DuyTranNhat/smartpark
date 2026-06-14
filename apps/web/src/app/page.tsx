'use client'
import { useQuery } from '@apollo/client'
import { CompaniesDocument, SearchGaragesDocument } from '@smartpark/network/src/gql/generated'
import { Button } from '@smartpark/ui/src/components/atoms/Button'
import { Sidebar } from '@smartpark/ui/src/components/organisms/Sidebar'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: sessionData, status } = useSession()
  const { data: garages } = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '2024-12-14', start: '2024-12-04' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  })

  return (
    <main className=" p-8">
      <div>
        {sessionData?.user?.uid ? (
          <Button onClick={() => signOut()}>Signout</Button>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <div className="p-12">
          <Sidebar>Children...</Sidebar>
      </div>
      </div>
      <div>
        <h3>
          2. Viết mã nguồn (Lập trình)Nếu bạn đang lập trình và cần tạo chuỗi
          ngẫu nhiên bằng code:Ngôn ngữ C++: Bạn có thể tham khảo cách Phát sinh
          số ngẫu nhiên trong C++ và thảo luận thêm tại Dạy Nhau Học.Các ngôn
          ngữ khác: Tùy thuộc vào dự án đang làm, bạn có thể áp dụng thư viện
          chuẩn như Random của Java, hoặc random của Python.
        </h3>
        <div>
        {garages?.searchGarages.map((garage) => (
          <pre key={garage.id}>{JSON.stringify(garage, null, 2)}</pre>
        ))}
      </div>
        {/* {data?.companies.map((company) => (
          <div className="p-4 rounded" key={company.id}>
            <div>{company.description}</div>
            <div>{company.description}</div>
          </div>
        ))} */}
      </div>
    </main>
  )
}
