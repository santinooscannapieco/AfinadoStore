import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)

    return (
        <Link to={'/cart'} className="flex items-center relative">
            <FaShoppingCart className='text-stone-700 hover:text-stone-500 text-5xl h-11 mr-2' />

            <span className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-full px-2 py-1 text-xs">
                { itemsInCart() }
            </span>
        </Link>
    )
}

export default CartWidget