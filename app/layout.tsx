'use client'

import { Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from './components';
import { ClientOnly } from './components/ClientOnly';
import { RegisterModal } from './components/modals/';
import { ToasterProvider } from './providers';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone built with Next.js',
};

const font = Nunito ({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
