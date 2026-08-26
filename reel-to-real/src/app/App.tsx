import './styles/reset.css'
import './styles/variables.css'
import './styles/globals.css'
import { AuthProvider } from '@/entities/user'
import { AppRouter } from './router'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
