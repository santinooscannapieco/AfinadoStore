import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({productos}) => {

    return (
        <section className='container m-auto py-20'>
            <div className='flex justify-between'>
                <h2 className="text-4xl font-bold">Productos</h2>
            </div>
            <hr className='my-6 border-black'/>
            <div className='flex'>
                <div className='flex gap-10 flex-wrap justify-start'>
                    { productos.map( (item) => <ItemCard key={item.id} name={item.name} description={item.description} /> ) }
                </div>
                <div className=''>
                    filtros de mi página que filtran los productos
                </div>
            </div>
        </section>
    )
}

export default ItemList