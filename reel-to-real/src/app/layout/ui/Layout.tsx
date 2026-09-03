import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import './Layout.css'
import { CookieBunner } from '@/widgets/cookie-bunner'
import { ToTop } from '@/widgets/to-top'
import { useState } from 'react'
import { MiniCart } from '@/widgets/mini-cart'

export const Layout = () => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)

  const miniCartSlot = (
    <MiniCart
      isOpen={isMiniCartOpen}
      onClose={() => setIsMiniCartOpen(false)}
    />
  )
  
  return (
    <div className='layout'>
      <Header
        onToggleMiniCart={() => setIsMiniCartOpen(!isMiniCartOpen)}
        miniCartSlot={miniCartSlot}
      />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />

      <CookieBunner />
      <ToTop />
    </div>
  )
}