import { useCallback, useEffect, useReducer, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    const reducer = (state, action) => {
        switch(action.type){
            case 'loading':
                return {...initialState, isLoading: true}
            case 'fetched':
                return {...initialState, data: action.payload, isLoading: false}
            case 'error':
                return {...initialState, error: action.payload, isLoading: false}
            default:
                return {state}
        }
    }

    const initialState = {
        data: [],
        isLoading: true,
        error: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const http = useCallback(async () => {
        console.log('Requisição GET')
        // try{
        //     const response = await fetch(url)
        //     const data = await response.json()
        //     setData(data)
        // }catch(error){
        //     setError(error.messagem)
        // }finally{
        //     setIsloading(false)
        // }
        dispatch({type: 'loading'})
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch({type: 'fetched', payload: data.results}))
            .catch(error =>dispatch({type: 'error', payload: error.message}))
    }, [url])
    
    useEffect(() => {
        http()
    }, [http])

    return { 
        data: state.data, 
        error: state.error, 
        isLoading: state.isLoading 
    }
}