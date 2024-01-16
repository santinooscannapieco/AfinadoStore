import { Link } from "react-router-dom"

const ItemCard = ( {item} ) => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })


    return (
        <div className="container flex justify-between flex-col w-72">
            <div className="text-start text-base">
                <div className="w-72 h-72 flex items-center">
                    <img className="m-auto max-h-72" src={item.img} alt="imagen" />
                </div>
                {/* <img src={item.img} alt="imagen" className="m-auto" /> */}
                {/* <p className="text-stone-700">{item.description}</p> */}
                
                { (item.stock <= 10 && item.stock > 1) && ( <p className="font-bold text-stone-500 absolute">Quedan solo {item.stock} unidades!</p> ) }
                { item.stock === 1 && <p className="font-bold text-stone-500 absolute">Queda solo {item.stock} unidad!</p> }
                
            </div>
            <div className="text-center mt-5 font-semibold">
                <p className="text-xl text-stone-900">{item.name}</p>
            </div>
            <p className="text-xl text-center font-bold mb-2 text-stone-900">{USDollar.format(item.price)}</p>
            <Link to={`/item/${item.id}`}>
                <button className="text-gray-50 bg-stone-700 hover:bg-stone-500 border-none w-72">
                    Ver más
                </button>
            </Link>
        </div>
    )
}

export default ItemCard