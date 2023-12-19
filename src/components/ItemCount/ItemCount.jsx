import { useState } from "react"

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const incrementar = () => {
        counter < 5 && setCounter( counter + 1 )
    }

    const decrementar = () => {
        counter > 0 && setCounter( counter - 1 )
    }

    const resetCount = () => {
        setCounter(0)
    }

    /* FALTA CORREGIR EL CSS */
    return (
        <section className="container mt-8 relative inset-x-0 bottom-0">
            <div className="flex justify-between w-52">
                <button onClick={decrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">-</button>
                <p className="m-auto">{counter}</p>
                <button onClick={incrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">+</button>
            </div>
            <button className="mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" onClick={resetCount}>Agregar al carrito</button>
        </section>
    )
}

export default ItemCount