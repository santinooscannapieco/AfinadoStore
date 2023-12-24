import { useState, useEffect  } from 'react'
import ItemList from '../ItemList/ItemList'
import useFetch from '../../hooks/useFecth'
import useProductos from '../../hooks/useProductos'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const { categoryId } = useParams()
    const { productos, loading } = useProductos(categoryId)
    /* const { data } = useFetch('https://pokeapi.co/api/v2/pokemon/25') */

    
    return (
        <>
        {/* {
            data && <ItemList data={ data }/>
        } */}
        
        {
            loading
                ? <h3 className='text-4xl font-bold text-center m-8'>Cargando...</h3>
                : <ItemList 
                    productos={productos}
                    categoryId={categoryId}
                  />
        }
        </>
    )
}

export default ItemListContainer