"use client"
import { useMutation, useQuery } from '@apollo/client'
import { RegisterWithCredentialsDocument, CompaniesDocument } from '@smartpark/network/src/gql/generated'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)

  return (
    <main 
    className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {data?.companies.map((company) => (
        <div key={company.id}>
          <h2>{company.displayName}</h2>
          <p>{company.description}</p>
        </div>
      ))}
    </main>
  )
}