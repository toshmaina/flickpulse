import type { Metadata } from 'next';
import "./styles/globals.css";


export const metadata: Metadata = {
  title: 'FlickPulse',
  description: 'Discover your favorite movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       
        <div className="">
          < div className=""/>
        </div>
        <main className=''>
          {children}
        </main>  
      
      </body>
    </html>
  )
}
