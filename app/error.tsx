'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div className=' mt-[25%] items-center flex flex-col items-center justify-center   '>
      <h2 className='m-5'>Something went wrong!</h2>
      <button className='border px-5 py-2 bg-coral-red text-center   text-white '
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => location.reload()
        }
      >
        Try again
      </button>
    </div>
  )
}
