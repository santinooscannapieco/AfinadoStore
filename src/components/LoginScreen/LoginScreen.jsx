import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"



const LoginScreen = () => {
    const { login, register, googleLogin } = useContext(UserContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div className="flex justify-center items-center fixed inset-0 z-1000 bg-black bg-opacity-50">
            <div className="p-8 rounded bg-white">
                <h2 className="text-2xl font-semibold w-80 m-2">Login</h2>
                <hr />

                <form onSubmit={handleSubmit} className="flex flex-col mt-2 gap-2">
                    <input 
                        className="border p-2 rounded-md"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <input 
                        className="border p-2 rounded-md"
                        type="password"
                        placeholder="Password"
                        value={values.password} 
                        onChange={handleInputChange}
                        name="password"
                    />
                    <button className="mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" type="submit">Ingresar</button>
                </form>

                <button 
                    onClick={() => register(values)} 
                    className="mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" type="submit"
                >
                    Registrar
                </button>
                <br />
                <button 
                    onClick={googleLogin} 
                    className="mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none" type="submit"
                >
                    Iniciar sesión con google
                </button>
            </div>
        </div>
    )
}

export default LoginScreen