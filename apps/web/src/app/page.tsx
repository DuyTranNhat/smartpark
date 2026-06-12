'use client'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@smartpark/network/src/gql/generated'
import { Button } from '@smartpark/ui/src/components/atoms/Button'
import { Sidebar } from '@smartpark/ui/src/components/organisms/Sidebar'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  const { data: sessionData, status } = useSession()
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
        {data?.companies.map((company) => (
          <div className="p-4 rounded" key={company.id}>
            <div>{company.description}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
