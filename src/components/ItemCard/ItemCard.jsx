import ItemCount from "../ItemCount/ItemCount"

const ItemCard = ( {title, description, img} ) => {

    return (
        <div className="container flex justify-between flex-col w-60 border border-black rounded-lg p-4">
            <div className="text-start text-base h-auto">
                <img src={img} alt="imagen" className="m-auto" />
                <p className="text-stone-700">{description}</p>
            </div>
            <div className="text-center my-2 font-semibold">
                <p className="text-xl text-stone-900">{title}</p>
            </div>
            <ItemCount />
        </div>
    )
}

export default ItemCard