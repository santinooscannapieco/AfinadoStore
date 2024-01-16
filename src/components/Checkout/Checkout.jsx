import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, doc, getDoc,  updateDoc, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"


const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [ values, setValues ] = useState({
        nombre: "",
        direccion: "",
        email:"",
    })

    const [ orderId, setOrderId ] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            items: cart.map((item) => ({ 
                id: item.id,
                name: item.name,
                cantidad: item.cantidad,
                price: item.price
            })),
            total: totalCart(),
            fecha: new Date()
        }
        
        const ordersRef = collection(db, 'orders')

        /* cart.forEach(item => {
            const docRef = doc(db,'productos', item.id)
            getDoc(docRef)
                .then(doc => {
                    updateDoc(docRef, {
                        stock: doc.data().stock - item.cantidad
                    })
                })
        }) */

        addDoc(ordersRef, orden)
            .then(doc => {
                setOrderId(doc.id)
                clearCart()

                Swal.fire("Gracias por tu compra")
            })
    }

    if (orderId) {
        return (
            <div className="container mx-auto mb-auto py-20">
                <h2 className="text-4xl font-bold uppercase text-stone-900">Gracias por tu compra</h2>
                <hr className="my-6 border-stone-900" />

                <h4>Esta es tu id de orden: {orderId}</h4>
            </div>
        )
    } 



    return (
        <div className="container mx-auto mb-auto py-20">
            <h2 className="text-4xl font-bold uppercase text-stone-900">Checkout</h2>
            <hr className="my-6 border-stone-900" />

            <h4>Ingresa tus datos:</h4>
            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4 max-w-md mt4"
            >
                <input 
                    className="border p-2" 
                    type="text" 
                    placeholder="Nombre" 
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                />

                <input 
                    className="border p-2" 
                    type="text" 
                    placeholder="Dirección" 
                    value={values.direccion}
                    name="direccion"
                    onChange={handleInputChange}
                />
                
                <input 
                    className="border p-2" 
                    type="text" 
                    placeholder="Email" 
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                />
                <button className="mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout