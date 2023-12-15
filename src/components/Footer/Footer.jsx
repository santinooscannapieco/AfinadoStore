

const Footer = () => {

    return (
        <footer className="mt-auto bg-stone-300 p-4">
            <div className="container m-auto text-center">
                <p>ESTE ES EL FOOTER</p>
                <div className="flex justify-between w-8/12 m-auto">
                    <div>
                        <p className="my-4">TEXTO 1 IZQ</p>
                        <p className="my-4">TEXTO 2 IZQ</p>
                        <p className="my-4">TEXTO 3 IZQ</p>
                        <p className="my-4">TEXTO 4 IZQ</p>
                    </div>
                    <div>
                        <p className="my-4">TEXTO 1 DER</p>
                        <p className="my-4">TEXTO 2 DER</p>
                        <p className="my-4">TEXTO 3 DER</p>
                        <p className="my-4">TEXTO 4 DER</p>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer