'use client' // Error components must be Client Components
 
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

 
export default function Error({ error}:ErrorPage) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  const router: AppRouterInstance = useRouter();
  return (
    <div className=' mt-[25%] items-center flex flex-col  justify-center   '>
      <h2 className='m-5 text-red-600'>Something went wrong!</h2>
      <button className='border px-5 py-2 bg-coral-red text-center   text-white '
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.refresh()
        }
      >
        Try again
      </button>
    </div>
  )
}
