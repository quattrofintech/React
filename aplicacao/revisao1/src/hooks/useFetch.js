import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data.results)
            })
            .catch((error) => {
                setError('Not Found')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [url])

    return {data, isLoading, error}
}