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
                <button onClick={decrementar} className="bg-gray-50 border-black w-10 h-10 p-0 hover:bg-gray-500 hover:border-black hover:text-white">-</button>
                <p className="m-auto">{counter}</p>
                <button onClick={incrementar} className="bg-gray-50 border-black w-10 h-10 p-0 hover:bg-gray-500 hover:border-black hover:text-white">+</button>
            </div>
            <button className="bg-white border-black h-8 p-0 mt-4 hover:bg-gray-500 hover:border-black hover:text-white" onClick={resetCount}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount