import { LoginForm } from '@smartpark/ui/src/components/templates/LoginForm'
import { AuthLayout } from '@smartpark/ui/src/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  )
}