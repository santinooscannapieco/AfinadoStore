import CartWidget from "./CartWidget"
import logo from '../../assets/afinado-store.svg'
import { Link, NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { ImSwitch } from "react-icons/im";

export const links = [
    {
        id: 1,
        label: "Cuerda",
        href: "/productos/cuerda"
    },
    {
        id: 2,
        label: "Viento",
        href: "/productos/viento"
    },
    {
        id: 3,
        label: "Percusión",
        href: "/productos/percusion"
    },
    {
        id: 4,
        label: "Teclados",
        href: "/productos/teclados"
    },
    {
        id: 5,
        label: "Grabación",
        href: "/productos/grabacion"
    },
    {
        id: 6,
        label: "Accesorios",
        href: "/productos/accesorios"
    },

]

const Navbar = () => {
    const { user, logout } = useContext(UserContext)
    const [ verLogout, setVerLogout ] = useState(false)

    const mostrarLogout = () => {
        setVerLogout(!verLogout)
    }

    return (
        <header className="bg-stone-300">
            <div className="container m-auto py-5 flex">
                <div className="container flex justify-between items-center">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="h-11" />
                    </Link>
                    
                    <nav className="flex gap-5 text-stone-700 text-xl">
                        {
                            links.map((link) => (
                                <NavLink
                                    key={ link.id } 
                                    to={ link.href }
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-stone-500 font-bold"
                                            : "hover:text-stone-500 font-semibold"
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))
                        }
                    </nav>

                    <CartWidget />
                </div>
                {user.logged && 
                    <button 
                        onClick={mostrarLogout}
                        className="text-gray-50 bg-stone-700 hover:bg-stone-500 border-none flex flex-col justify-center relative ml-4"
                    >
                        <ImSwitch className="" />
                        {verLogout && 
                            <div className="flex flex-col items-center absolute bg-stone-300 right-0 -bottom-24 p-2 rounded">
                                <p className="text-stone-700 font-bold">{user.email}</p>
                                <button onClick={logout} className="w-40 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">Cerrar sesión</button>
                            </div>
                        }
                    </button>
                }
            </div>

        </header>
    )
}

export default Navbar