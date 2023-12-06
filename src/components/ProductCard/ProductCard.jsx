import ItemCount from "../ItemCount/ItemCount"

const ProductCard = ( {titulo, texto} ) => {

    return (
        <div className="container flex justify-between flex-col w-60 border border-black rounded-lg p-4">
            <div className="text-center my-2 font-semibold">
                <p className="text-xl">{titulo}</p>
            </div>
            <div className="text-start text-base h-20">
                <p>{texto}</p>
            </div>
            <ItemCount />
        </div>
    )
}

export default ProductCard