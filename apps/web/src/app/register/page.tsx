import { RegisterForm } from '@smartpark/ui/src/components/templates/RegisterForm'
import { AuthLayout } from '@smartpark/ui/src/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}
