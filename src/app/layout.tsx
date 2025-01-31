import type { Metadata } from 'next'
import ProgressBarProvider from '@/components/progressbar-provider'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'

import { Barlow } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-barlow',
})

export const metadata: Metadata = {
    title: 'Slice & Dice',
    description: 'Regole e sistemi per tuo gioco di ruolo',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${barlow.variable} px-0 antialiased sm:px-4 md:px-6 lg:px-8`}>
                <ProgressBarProvider>
                    <div className="mx-auto my-0 w-full max-w-[1440px] overflow-hidden bg-white p-0">
                        <Header />
                        <Hero />
                        <div className="px-6 pb-0 pt-6 sm:px-8 sm:pt-8 lg:px-16 lg:pt-16 xl:px-20 xl:pt-20">{children}</div>
                        <Footer />
                    </div>
                </ProgressBarProvider>
            </body>
        </html>
    )
}
