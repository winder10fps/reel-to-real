import Header from '../../widgets/header/Header'
import Footer from '../../widgets/footer/Footer'
import './Layout.css'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout