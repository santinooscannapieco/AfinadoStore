import carrito from '../../assets/cart-shopping-white-2xl.svg'

const CartWidget = () => {
    const counter = 0

    return (
        <a href="#" className="flex items-center relative w-11 h-11">
            <img src={carrito} alt="carrito" />

            <span className="absolute bottom-0 right-0 bg-red-700 text-white rounded-full px-2 py-1 text-xs">
                {counter}
            </span>
        </a>
    )
}

export default CartWidget