import { useState } from "react"

const ItemCount = ( {item} ) => {
    const [cantidad, setCantidad] = useState(0)

    const incrementar = () => {
        cantidad < item.stock && setCantidad( cantidad + 1 )
    }

    const decrementar = () => {
        cantidad > 0 && setCantidad( cantidad - 1 )
    }

    const resetCount = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        console.log(itemToCart)
        setCantidad(0)
    }

    /* FALTA CORREGIR EL CSS */
    return (
        <section className="container mt-8 w-52 text-xl">
            <div className="flex justify-between">
                <button onClick={decrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">-</button>
                <p className="m-auto font-semibold">{cantidad}</p>
                <button onClick={incrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">+</button>
            </div>
            <button className="w-52 mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" onClick={resetCount}>Agregar al carrito</button>
        </section>
    )
}

export default ItemCount