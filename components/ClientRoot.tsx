'use client'

import Background from './Background/Background'
import Header from './Header/Header'

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Background />
      <Header />
      <main className="flex-1 min-h-0">
        {children}
      </main>
    </div>
  )
}
