import { Link } from "react-router-dom"

const ItemCard = ( {item} ) => {

    return (
        <div className="container flex justify-between flex-col w-72">
            <div className="text-start text-base">
                <div className="w-72 h-72 bg-slate-300">
                    <img className="m-auto h-72" src={item.img} alt="imagen" />
                </div>
                {/* <img src={item.img} alt="imagen" className="m-auto" /> */}
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