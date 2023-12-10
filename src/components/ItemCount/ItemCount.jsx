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

    return (
        <>
            <div className="flex justify-between">
                <button onClick={decrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">-</button>
                <p className="m-auto">{counter}</p>
                <button onClick={incrementar} className="w-10 h-10 p-0 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">+</button>
            </div>
            <button className="h-8 p-0 mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" onClick={resetCount}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount