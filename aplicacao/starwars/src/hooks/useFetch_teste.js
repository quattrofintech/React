import { useEffect, useState } from "react"

export const useFetch = (url, options = {}) => {    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(url){
            fetch(url, options)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                setData(data)
            })
            .catch(error => setError(error.message))
            .finally(setIsLoading(false))

        }
        
    }, [url])
    //        0     1       2
    // return [data, error, isLoading]
    return {data, error, isLoading}
}