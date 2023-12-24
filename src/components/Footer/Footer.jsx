import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {

    return (

        <footer className="mt-auto bg-stone-300 p-4">
            <div className="container m-auto text-center">
                <p className="my-4 text-stone-700 text-2xl font-bold">CONTACTANOS</p>
                <p className="my-4 text-stone-700 text-xl">afinadostore@gmail.com</p>
                
                <div className="container my-4 flex gap-2 justify-center">
                    <Link to={"https://www.instagram.com/"} target="_blank">
                        <FaInstagram className="text-stone-700 text-2xl" />
                    </Link>
                    <Link to={"https://twitter.com/"} target="_blank">
                        <FaXTwitter className="text-stone-700 text-2xl" />
                    </Link>
                    <Link to={"https://www.youtube.com/"} target="_blank">
                        <FaYoutube className="text-stone-700 text-2xl" />
                    </Link>
                    <Link to={"https://www.facebook.com/"} target="_blank">
                        <FaFacebook className="text-stone-700 text-2xl" />
                    </Link>
                </div>
                
                <p className="my-4 text-stone-700 text-xl">Mercedes 1951 CABA</p>
                <img src="/logo-afinado-store.svg" alt="logo" className="h-40 m-auto" />
            </div>
        </footer>
    )
}

export default Footer