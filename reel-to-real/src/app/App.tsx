import './styles/reset.css'
import './styles/variables.css'
import './styles/globals.css'
import Button from "../shared/ui/Button/Button"

function App() {
  return (
    <>
      <Button onClick={() => console.log('d')}>
        <img src="/" alt="" />
      </Button>
    </>
  )
}

export default App
