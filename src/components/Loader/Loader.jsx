import Spinner from "./Spinner"


const Loader = () => {

    return (
        <div className="flex flex-col justify-center items-center m-auto">
            <h3 className='text-4xl font-bold text-center text-stone-900 m-8'>Cargando...</h3>
            <Spinner />
        </div>
    )
}

export default Loader