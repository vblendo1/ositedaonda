import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Onda Educacional – A Educação do seu Município em primeiro lugar!",
  description:
    "Descubra uma plataforma educacional revolucionária que combina tecnologia de ponta com metodologias inovadoras para acelerar seu crescimento profissional e transformar o futuro através da educação.",
  generator: "v0.app",
  keywords:
    "educação, cursos online, aprendizado, tecnologia, desenvolvimento profissional, município, transformação, futuro",
  authors: [{ name: "Onda Educacional" }],
  openGraph: {
    title: "Onda Educacional – A Educação do seu Município em primeiro lugar!",
    description: "Plataforma educacional revolucionária que combina tecnologia de ponta com metodologias inovadoras.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
