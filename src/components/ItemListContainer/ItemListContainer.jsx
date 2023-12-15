import { useState, useEffect  } from 'react'
import ItemList from '../ItemList/ItemList'
import useFetch from '../../hooks/useFecth'
import useProductos from '../../hooks/useProductos'


const ItemListContainer = () => {
    const { productos, loading } = useProductos()
    /* const { data } = useFetch('https://pokeapi.co/api/v2/pokemon/25') */

    
    return (
        <>
        {/* {
            data && <ItemList data={ data }/>
        } */}
        
        {
            loading
                ? <h3 className='text-4xl font-bold text-center m-8'>Cargando...</h3>
                : <ItemList productos={productos}/>
        }
        </>
    )
}

export default ItemListContainer