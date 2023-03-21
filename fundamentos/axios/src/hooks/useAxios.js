import { useCallback, useEffect, useReducer } from "react"
import axios from '../axiosApi'

export const useAxios = (config) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'fetchted':
                return { data: action.payload, isLoading: false }
            case 'error':
                return { error: action.payload, isLoading: false }
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        data: [],
        isLoading: true,
        error: null
    })

    const httpRequest = useCallback(async () => {
        if(config.hasOwnProperty('url')){
            if(!config.hasOwnProperty('method')) 
                config['method'] = 'get'
            try{
                const response = await axios({
                    url: config.url,
                    method: config.method.toLowerCase()
                })
                dispatch({type: 'fetchted', payload: response})
            }catch(err){
                dispatch({type: 'error', payload: err.message})
            }
        }
        
    }, [config])

    useEffect(() => {
        httpRequest()
    }, [])

    return { data: state.data, isLoading: state.isLoading, error: state.error }
}