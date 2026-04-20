'use client'

import Background from './Background/Background'
import Header from './Header/Header'

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      {children}
    </>
  )
}
