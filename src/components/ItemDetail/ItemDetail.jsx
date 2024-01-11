import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



const ItemDetail = ( {item} ) => {
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    /* console.log( isInCart( item.id )) */

    const resetCount = () => {
        const itemToCart = {
            ...item,
            cantidad
        }

        addToCart( itemToCart )
        /* setCantidad(0) */
    }

    return(
        <div className="container mx-auto py-20">
            <h3 className="text-4xl font-semibold text-stone-900">{item.name}</h3>
            <hr className='my-6 border-black' />
            <div className="flex gap-28 mt-8 justify-center">
                <div className="w-72 h-72 bg-slate-300">
                    <img className="m-auto h-72" src={item.img} alt="imagen" />
                </div>

                <div className="max-w-2xl">
                    <p className="text-stone-700">{item.description}</p>
                    <p className="text-2xl font-bold my-8 text-stone-900">$ {item.price}</p>

                    {
                        isInCart(item.id)
                          ? <Link to={"/cart"}>
                                <button className="w-52 mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">Terminar mi compra</button>
                            </Link>
                          : <>
                                <ItemCount 
                                  cantidad={ cantidad }
                                  stock={ item.stock }
                                  setCantidad={ setCantidad }
                                />

                                <button className="w-52 mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" onClick={resetCount}>
                                    Agregar al carrito
                                </button>
                            </>
                    }                    
                </div>
            </div>
        </div>

        
    )
}

export default ItemDetail