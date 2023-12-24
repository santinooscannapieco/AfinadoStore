import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { links } from "../Navbar/Navbar"

const Footer = () => {

    return (

        <footer className="mt-auto bg-stone-300 p-4">
            <div className="container m-auto text-center">
                <p className="my-4 text-stone-700 text-2xl font-bold">CONTACTANOS</p>
                <p className="my-4 text-stone-700 text-xl">afinadostore@gmail.com</p>
                <div className="container my-4 flex gap-2 justify-center">
                    <FaInstagram className="text-stone-700 text-2xl" />
                    <FaXTwitter className="text-stone-700 text-2xl" />
                    <FaYoutube className="text-stone-700 text-2xl" />
                    <FaFacebook className="text-stone-700 text-2xl" />
                </div>
                <p className="my-4 text-stone-700 text-xl">Mercedes 1951 CABA</p>
                <img src="/logo-afinado-store.svg" alt="logo" className="h-40 container" />
            </div>
        </footer>
    )
}

export default Footer