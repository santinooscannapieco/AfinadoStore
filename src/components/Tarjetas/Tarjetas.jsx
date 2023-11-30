import { useState } from "react"

const Tarjetas = ( {titulo, texto} ) => {
    const [counter, setCounter] = useState(0)

    const incrementar = () => {
        counter < 5 && setCounter( counter + 1 )
        
    }

    const decrementar = () => {
        counter > 0 && setCounter( counter - 1 )
    }

    return (
        <div className="container flex justify-between flex-col w-52 border border-black rounded-lg p-4">
            <div className="text-center my-2 font-semibold">
                <p className="text-xl">{titulo}</p>
            </div>
            <div className="text-start text-base h-20">
                <p>{texto}</p>
            </div>
            <div className="flex justify-between">
                <button onClick={decrementar} className="bg-gray-50 border-black w-10 h-10 p-0 hover:bg-gray-500">-</button>
                <p className="m-auto">{counter}</p>
                <button onClick={incrementar} className="bg-gray-50 border-black w-10 h-10 p-0 hover:bg-gray-500">+</button>
            </div>
        </div>
    )
}

export default Tarjetas