import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ( {item} ) => {

    return(
        <div className=" container flex-column mx-auto py-20">
            <h3 className="text-4xl text-stone-900 font-semibold my-2">{item.title}</h3>
            <hr className='my-6 border-black'/>
            <div className="flex column gap-28 justify-center">
                <img src={item.img} alt="imagen" />
                {/* <p className="w-96 h-96 bg-stone-500">FOTO</p> */}
                <div className="flex justify-between flex-col max-w-lg">
                    <p className="text-stone-700">{item.description}</p>
                    <p className="text-4xl font-bold ">$ {item.price}</p>
                    <ItemCount />
                </div>
            </div>

            {/* <div className="text-center my-2 font-semibold">
                <p className="text-xl text-stone-900">{item.title}</p>
            </div>
            <div className="text-start text-base h-auto">
                <img src={item.img} alt="imagen" className="m-auto" />
                <p className="text-stone-700">{item.description}</p>
            </div>
            <ItemCount /> */}
        </div>
    )
}

export default ItemDetail