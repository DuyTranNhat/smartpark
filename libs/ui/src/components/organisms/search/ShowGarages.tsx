import { useLazyQuery } from '@apollo/client'
import { SearchGaragesDocument } from '@smartpark/network/src/gql/generated'
import { useEffect } from 'react'
import { GarageMarker } from './GarageMarker'
import { useConvertSearchFormToVariables } from '@smartpark/forms/src/adapters/searchFormAdapter'

export const ShowGarages = () => {
  const [searchGarages, { loading, data, error }] = useLazyQuery(
    SearchGaragesDocument,
  )

  const { variables } = useConvertSearchFormToVariables()

  useEffect(() => {
  if (variables) {
      searchGarages({ variables })
    }
  }, [searchGarages, variables])

  return (
    <>
      {data?.searchGarages.map((garage) => (
        <GarageMarker key={garage.id} marker={garage} />
      ))}
    </>
  )
}