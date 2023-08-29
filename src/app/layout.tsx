import Footer from '@/components/footer'
import './styles/globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import NavBar from '@/components/nav-bar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buy-It coporate Store',
  description: 'Getsuper quality shirts, shoes , glasses and hats from you number 1 superstore in Abuja.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider />
          <ToastProvider />
          <NavBar/>
          {children}
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  )
}
