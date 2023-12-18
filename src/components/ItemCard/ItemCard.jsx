import { Link } from "react-router-dom"

const ItemCard = ( {item} ) => {

    return (
        <div className="container flex justify-between flex-col w-60 border border-black rounded-lg p-4">
            <div className="text-start text-base h-auto">
                <img src={item.img} alt="imagen" className="m-auto" />
                {/* <p className="text-stone-700">{item.description}</p> */}
            </div>
            <div className="text-center mt-2 font-semibold">
                <p className="text-xl text-stone-900">{item.title}</p>
            </div>
            <p className="text-xl text-center font-bold mb-2">$ {item.price}</p>
            <button className="text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">
                <Link to={`/item/${item.id}`}>Ver más</Link>
            </button>
        </div>
    )
}

export default ItemCard