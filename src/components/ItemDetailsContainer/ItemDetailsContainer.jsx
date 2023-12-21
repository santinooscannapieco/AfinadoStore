import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../utils/utils"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailsContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(data => { 
                setItem( data.find(prod => prod.id === Number(itemId)) ) 
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {
                loading
                    ? <h3 className='text-4xl font-bold text-center m-8'>Cargando...</h3>
                    : <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailsContainer