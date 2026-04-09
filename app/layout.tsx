import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daphné Bordel - Portfolio',
  description: 'Développeuse Web & Mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="flex flex-col overflow-x-hidden bg-gray-100 dark:bg-gray-900 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}