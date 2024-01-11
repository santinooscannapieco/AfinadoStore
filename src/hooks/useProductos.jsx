import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const useProductos = (categoryId) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 

    
    useEffect(() => {
        setLoading( true )

        // 1.- Armar una referencia (sync)
        const productosRef = collection(db, 'productos')
        const docs = categoryId
                        ? query( productosRef, where('category', '==', categoryId) )
                        : productosRef

        // 2.- Llamar a esa referencia (async)
        getDocs( docs )
          .then((querySnapshot) => {
            const docs = querySnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProductos( docs )
          })
          .finally(() => setLoading(false))

        },[categoryId])

    return {
        productos,
        loading
    }
}

export default useProductos