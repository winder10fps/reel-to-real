import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import './Layout.css'
import { CookieBunner } from '@/widgets/cookie-bunner'

export const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />

      <CookieBunner />
    </div>
  )
}