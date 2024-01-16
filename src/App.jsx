import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'


function App() {

  return (
    <CartProvider>

      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          
          {/* <Routes>
            <Route path='/not-found' element={ null } />
            <Route path='*' element={ <Navbar /> } />
          </Routes> */}

          <Navbar />

          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <CartView />} />
            <Route path='/checkout' element={ <Checkout />} />

            <Route path='/not-found' element={ <h2 className='text-center mt-16 text-2xl'>NOT FOUND</h2> } />
            <Route path='*' element={ <Navigate to={"/not-found"} /> } />
          </Routes>

          <Footer /> 
        </div>
      </ BrowserRouter>

    </CartProvider>
  )
}

export default App
