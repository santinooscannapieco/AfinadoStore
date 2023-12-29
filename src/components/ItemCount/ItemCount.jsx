import { useState } from "react"

const ItemCount = ( {cantidad, stock, setCantidad} ) => {
    

    const incrementar = () => {
        cantidad < stock && setCantidad( cantidad + 1 )
    }

    const decrementar = () => {
        cantidad > 1 && setCantidad( cantidad - 1 )
    }    

    /* FALTA CORREGIR EL CSS */
    return (
        <section className="container mt-8 w-52 text-xl">
            <div className="flex justify-between">
                <button onClick={decrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">-</button>
                <p className="m-auto font-semibold">{cantidad}</p>
                <button onClick={incrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">+</button>
            </div>
        </section>
    )
}

export default ItemCount