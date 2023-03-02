import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch(error => setError(error.message))
            .finally(setIsLoading(false))
    }, [url])

    return {data, isLoading, error}
}