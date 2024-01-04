import { Link } from "react-router-dom"


const EmptyCart = () => {

    return (
        <section className="container mx-auto mb-auto py-20">
            <h2 className="text-4xl font-bold uppercase text-stone-900">Tu carrito está vacio</h2>
            <hr className="my-6 border-stone-900"/>

            <Link to={"/"}>
                <button className="w-52 mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">
                    Volver a la tienda
                </button>
            </Link>
        </section>
    )
}

export default EmptyCart