import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import EmptyCart from "./EmptyCart"


const CartView = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext)

    if(cart.length === 0) return <EmptyCart />

    return (
        <section className="container mx-auto mb-auto py-20">
            <h2 className="text-4xl font-bold uppercase text-stone-900">COMPRA</h2>
            <hr className="my-6 border-stone-900"/>

            <ul>
                {
                    cart.map((item) => (
                        <li key={item.id} className="flex gap-3 my-4">
                            <img src={item.img} alt="Cart img" className="w-32" />
                            <div>
                                <h3 className="text-2xl">{item.title}</h3>
                                <p className="text-2xl font-bold">$ {item.price * item.cantidad}</p>
                                <p className="text-xl">Cantidad: {item.cantidad}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            
            <h4 className="text-4xl font-semibold">TOTAL: $ {totalCart()}</h4>

            <button onClick={clearCart} className="w-52 mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">Vaciar carrito</button>
        </section>
    )
    
}

export default CartView