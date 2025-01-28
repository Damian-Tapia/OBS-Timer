import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { CounterProvider } from "./context/counterContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stream Counter Widget",
  description: "Configura y controla tu contador para streams",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CounterProvider>{children}</CounterProvider>
      </body>
      
    </html>
  )
}

