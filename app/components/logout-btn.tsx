'use client'
import { useRouter } from 'next/navigation'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import axios from 'axios'

export default function LogoutBtn() {
  const router = useRouter()
  const logout = async () => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/logout`,
      {},
      { withCredentials: true }
    )
    router.push('/')
  }
  return (
    <div className="flex justify-center">
      <ArrowRightOnRectangleIcon
        onClick={logout}
        className="h-6 w-6 my-6 text-blue-500 cursor-pointer"
      />
    </div>
  )
}
