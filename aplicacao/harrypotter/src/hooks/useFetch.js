import React, {useState, useEffect} from 'react'

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        if(url){
            setIsLoading(true)
            fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch((error) => {
                console.log(error)
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }

        // const httpRequest = async () => {
        //     const response = await fetch(url)
        //     const data = await response.json()
        //     setData(data)
        // }
        // httpRequest()
    }, [url, options])
    
    return {data, isLoading, error}
}