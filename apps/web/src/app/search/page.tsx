'use client'
import { SearchPage } from '@smartpark/ui/src/components/templates/SearchPage'
import { FormProviderSearchGarage } from '@smartpark/forms/src/searchGarages'

export default function Page() {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  )
}