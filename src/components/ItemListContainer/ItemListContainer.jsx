import { useState, useEffect  } from 'react'
import ItemList from '../ItemList/ItemList'
import { pedirDatos } from '../../utils/utils'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading( true )

        pedirDatos()
            .then((data) => {
                setProductos( data )
                setLoading( false )
            })
    },[])
    
    return (
        <>
        {
            loading
                ? <h3 className='text-4xl font-bold text-center m-8'>Cargando...</h3>
                : <ItemList productos={productos}/>
        }
        </>
    )
}

export default ItemListContainer