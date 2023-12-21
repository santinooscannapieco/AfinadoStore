import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ( {item} ) => {

    return(
        <div className="container m-auto mt-8">
            <h3 className="text-4xl font-semibold text-stone-900">{item.title}</h3>
            <hr className='my-6 border-black' />
            <div className="flex gap-28 mt-8 justify-center">
                <div className="w-96 h-96 bg-slate-300">
                    <img className="m-auto h-96" src={item.img} alt="imagen" />
                </div>

                <div className="max-w-2xl">
                    <p className="text-stone-700">{item.description}</p>
                    <p className="text-2xl font-bold my-8 text-stone-900">$ {item.price}</p>

                    <ItemCount item={item} />
                </div>

            </div>
        </div>

        
    )
}

export default ItemDetail