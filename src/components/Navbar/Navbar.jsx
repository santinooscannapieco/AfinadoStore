import CartWidget from "../CartWidget/CartWidget"
import logo from '../../assets/logo.png'

const Navbar = () => {
    
    return (
        <header className="bg-teal-700">
            <div className="container m-auto py-5 flex column justify-between items-center">
                <a href="#">
                    <img src={logo} alt="logo" className="h-11" />
                </a>
                
                <nav className="flex gap-5 text-slate-50">
                    <a href="#" className="hover:text-teal-900 font-semibold">CUERDA</a>
                    <a href="#" className="hover:text-teal-900 font-semibold">VIENTO</a>
                    <a href="#" className="hover:text-teal-900 font-semibold">PERCUSIÓN</a>
                    <a href="#" className="hover:text-teal-900 font-semibold">ELÉCTRICOS</a>
                    <a href="#" className="hover:text-teal-900 font-semibold">ACCESORIOS</a>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar