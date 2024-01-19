import './App.css'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'
import AppRouter from './router/AppRouter'


function App() {

  return (
    <UserProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </UserProvider>
  )
}

export default App
