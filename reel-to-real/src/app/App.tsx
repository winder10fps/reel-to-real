import './styles/reset.css'
import './styles/variables.css'
import './styles/globals.css'
import { AuthProvider } from '../entities/user/model/user.context'
import Header from '../widgets/header/Header'
import Hero from '../widgets/Hero/Hero'
import Footer from '../widgets/footer/Footer'
import RunningLine from '../widgets/RunningLine/RunningLine'

function App() {
  return (
    <AuthProvider>
      <Header />
      <Hero />
      <RunningLine />
      <Footer />
    </AuthProvider>
  )
}

export default App
