import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const counter = 0

    return (
        <a href="#" className="flex items-center relative">
            <FaShoppingCart className='text-stone-700 hover:text-stone-500 text-5xl h-11 mr-2' />

            <span className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-full px-2 py-1 text-xs">
                {counter}
            </span>
        </a>
    )
}

export default CartWidget