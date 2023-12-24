import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({ productos, categoryId }) => {

    return (
        <section className='container mx-auto py-20'>
            <div className='flex justify-between'>
                <h2 className="text-4xl font-bold uppercase text-stone-900">
                    {
                        categoryId
                            ? categoryId
                            : "Productos"
                    }
                </h2>
            </div>
            <hr className='my-6 border-stone-900'/>
            <div className='flex justify-between'>
                <div className='flex gap-10 flex-wrap justify-start'>
                    {/* <ItemCard name={data.name} img={data.sprites.front_default} /> */}


                    { productos.map( (item) => <ItemCard key={item.id} item={item} /> ) }
                </div>
                
                {/* <div className=''>
                    filtros de mi página que filtran los productos
                </div> */}
            </div>
        </section>
    )
}

export default ItemList