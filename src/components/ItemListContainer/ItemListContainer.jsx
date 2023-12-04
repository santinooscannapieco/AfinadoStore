import Tarjetas from '../Tarjetas/Tarjetas'


const ItemListContainer = ( {greeting} ) => {

    return (
        <section className='container m-auto py-20'>
            <h2 className="text-4xl font-bold">{greeting}</h2>
            <hr className='my-6 border-black'/>
            
            <div className='flex gap-10'>
                <Tarjetas titulo={"Guitarra acústica"} texto={"Esta es una guitarra acústica"}/>
                <Tarjetas titulo={"Cuerda guitarra"} texto={"Encordado Guitarra"}/>
                <Tarjetas titulo={"Saxofón"} texto={"Esto es un instrumento de viento"}/>
                <Tarjetas titulo={"Platillos"} texto={"Esto es un instrumento de percusión"}/>
            </div>
        </section>

    )
}

export default ItemListContainer