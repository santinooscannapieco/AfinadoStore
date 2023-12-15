import { useState, useEffect } from "react"
import { pedirDatos } from "../utils/utils"


const useProductos = (categoryId) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 

    
    useEffect(() => {
        setLoading( true )

        pedirDatos()
            .then((data) => {
                const items = categoryId 
                                ? data.filter(prod => prod.category === categoryId)
                                : data

                setProductos( items )
            })
            .finally(() => setLoading( false ))
    },[categoryId])

    return {
        productos,
        loading
    }
}

export default useProductos