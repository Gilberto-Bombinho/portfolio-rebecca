import Router from './routes'
import { GlobalStyle } from './style/globalStyles'

console.log('olá')

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App
