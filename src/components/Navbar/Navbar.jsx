import CartWidget from "../CartWidget/CartWidget"
import logo from '../../assets/afinado-store.svg'
import { Link } from "react-router-dom"

const links = [
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
    
    return (
        <header className="bg-stone-300">
            <div className="container m-auto py-5 flex column justify-between items-center">
                <Link to={"/"}>
                    <img src={logo} alt="logo" className="h-11" />
                </Link>
                
                <nav className="flex gap-5 text-stone-700">
                    {
                        links.map((link) => (
                            <Link key={ link.id } to={ link.href } className="hover:text-stone-500 font-semibold uppercase">
                                { link.label }
                            </Link>
                        ))
                    }
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar