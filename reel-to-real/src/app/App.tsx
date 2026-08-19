import './styles/reset.css'
import './styles/variables.css'
import './styles/globals.css'
import { AuthProvider } from '../entities/user/model/user.context'
import Header from '../widgets/header/Header'
import AppContainer from '../shared/ui/AppContainer/AppContainer'

function App() {
  return (
    <AuthProvider>
      <AppContainer>
        <Header />
      </AppContainer>
    </AuthProvider>
  )
}

export default App
