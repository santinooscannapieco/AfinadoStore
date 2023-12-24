import { useState, useEffect  } from 'react'
import ItemList from '../ItemList/ItemList'
import useFetch from '../../hooks/useFecth'
import useProductos from '../../hooks/useProductos'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


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
                ? <Loader />
                : <ItemList 
                    productos={productos}
                    categoryId={categoryId}
                  />
        }
        </>
    )
}

export default ItemListContainer
