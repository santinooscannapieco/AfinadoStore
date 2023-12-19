import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ( {item} ) => {

    return(
        <div className="container m-auto mt-8">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <hr />
            <div className="flex gap-8 mt-8 justify-center">
                <div className="w-96 h-96 bg-slate-300">
                    <img className="m-auto h-96" src={item.img} alt="imagen" />
                </div>

                <div className="max-w-xl">
                    <p className="text-stone-700">{item.description}</p>
                    <p className="text-xl font-bold ">$ {item.price}</p>

                    {/* <button className="bg-green-400">Agregar al carrito</button> */}
                    <ItemCount />
                </div>

            </div>
        </div>

        
    )
}

export default ItemDetail