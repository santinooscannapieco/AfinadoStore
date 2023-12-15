import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(respData => {
                setData(respData)
            })
    }, [])

    return { data }
}

export default useFetch


/*       Para llamar a la funcion
const { data } = useFetch('https://apiconproductos.com/productos')
*/