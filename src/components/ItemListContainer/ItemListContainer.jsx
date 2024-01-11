import { useState, useEffect  } from 'react'
import ItemList from '../ItemList/ItemList'
import useProductos from '../../hooks/useProductos'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


const ItemListContainer = () => {
    const { categoryId } = useParams()
    const { productos, loading } = useProductos(categoryId)
    
    return (
        <>
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
