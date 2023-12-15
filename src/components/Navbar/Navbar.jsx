import CartWidget from "../CartWidget/CartWidget"
import logo from '../../assets/afinado-store.svg'

const Navbar = () => {
    
    return (
        <header className="bg-stone-300">
            <div className="container m-auto py-5 flex column justify-between items-center">
                <a href="#">
                    <img src={logo} alt="logo" className="h-11" />
                </a>
                
                <nav className="flex gap-5 text-stone-700">
                    <a href="#" className="hover:text-stone-500 font-semibold">CUERDA</a>
                    <a href="#" className="hover:text-stone-500 font-semibold">VIENTO</a>
                    <a href="#" className="hover:text-stone-500 font-semibold">PERCUSIÓN</a>
                    <a href="#" className="hover:text-stone-500 font-semibold">TECLADOS</a>
                    <a href="#" className="hover:text-stone-500 font-semibold">GRABACIÓN</a>
                    <a href="#" className="hover:text-stone-500 font-semibold">ACCESORIOS</a>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar