import carrito from '../../assets/cart-shopping-white-2xl.svg'

import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const counter = 0

    return (
        <a href="#" className="flex items-center relative">
            {/* <img src={carrito} alt="carrito" /> */}
            <FaShoppingCart className='text-slate-50 text-5xl h-11 mr-2' />

            <span className="absolute bottom-0 right-0 bg-red-700 text-white rounded-full px-2 py-1 text-xs">
                {counter}
            </span>
        </a>
    )
}

export default CartWidget