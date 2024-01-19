import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import CartView from '../components/CartView/CartView'
import Checkout from '../components/Checkout/Checkout'
import Footer from '../components/Footer/Footer'
import LoginScreen from '../components/LoginScreen/LoginScreen'



const AppRouter = () => {
    const { user } = useContext(UserContext)

    return (
        <BrowserRouter>
          <div className='flex flex-col min-h-screen'>

            <Navbar />

            {user.logged ? (
              <>
                <Routes>
                  <Route path='/' element={ <ItemListContainer /> } />
                  <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
                  <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
                  <Route path='/cart' element={ <CartView />} />
                  <Route path='/checkout' element={ <Checkout />} />
      
                {/* {user.rol === "admin" && <Route path='/admin' element={ <AdminScreen /> } />} */}

                  <Route path='/not-found' element={ <h2 className='text-center mt-16 text-2xl'>NOT FOUND</h2> } />
                  <Route path='*' element={ <Navigate to={"/"} /> } />
                </Routes>

                <Footer /> 
              </>
            ) : (
              <Routes>
                <Route path='/login' element={ <LoginScreen /> } />
                <Route path='*' element={ <Navigate to="/login" /> } />
              </Routes>
            )}
          </div>
        </ BrowserRouter>
    )
}

export default AppRouter