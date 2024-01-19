import CartWidget from "./CartWidget"
import logo from '../../assets/afinado-store.svg'
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

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

    return (
        <header className="bg-stone-300">
            <div className="container m-auto py-5 flex justify-between items-center">
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

            {user.logged && <>
                <p>{user.email}</p>
                <button onClick={logout} className="mt-4 text-gray-50 bg-stone-700 hover:bg-stone-500 border-none">Cerrar sesión</button>
            </>

            }
        </header>
    )
}

export default Navbar