import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import React from "react";
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Dev Controle - Seu sistema de gerenciamento',
  description: 'Gerencie seus clientes e atendimento de forma fácil!',
}

export default function RottLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}