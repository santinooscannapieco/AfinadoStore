import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {

    return (

        <footer className="bg-stone-300 p-4">
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
                
                <Link to={"https://www.google.com/maps/place/Club+Atl%C3%A9tico+All+Boys/@-34.6169787,-58.4984315,19z/data=!4m15!1m8!3m7!1s0x95bcc9d0bb614b45:0x6f823a90a261f10b!2sMercedes+1951,+C1407+AIK,+Buenos+Aires!3b1!8m2!3d-34.6168584!4d-58.4980587!16s%2Fg%2F11c87n1pw8!3m5!1s0x95bcc9d7353a9d07:0xf09d534090643651!8m2!3d-34.6169444!4d-58.4980556!16s%2Fg%2F1td3h6c7?entry=ttu"} target="_blank">
                    <p className="my-4 text-stone-700 text-xl">Mercedes 1951 CABA</p>
                </Link>
                <img src="/logo-afinado-store.svg" alt="logo" className="h-40 m-auto" />
            </div>
        </footer>
    )
}

export default Footer