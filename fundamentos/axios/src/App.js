import React, { useCallback, useEffect, useState } from 'react'
import api from './axiosApi'
import { useAxios } from './hooks/useAxios'

function App() {
  const {data, isLoading, error} = useAxios({url: 'pokemon', method: 'get', body: {}, headers: {}})
  const [search, setSearch] = useState('')
  const [valor, setValor] = useState([])

  console.log(data)
  // const url = ''
  // const request = useCallback(async () => {
  //   try{
  //     const response = await fetch(`${url}/pokemon`)
  //     const data = await response.json()
  //     console.log(data)
  //     setValor(data.results)
  //   }catch(err){
  //     console.log(err)
  //   }
  //   fetch(`${url}/pokemon`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  //     .finally()
  // }, [url])

  // const requestAxios = useCallback(async () => {
  //   // api
  //   //   .get(`pokemon`)
  //   //   .then(response => setValor(response.data.results))
  //   //   .catch(err => console.log(err))
  //   //   .finally()

  //   try {
  //     const res = await api.get(`pokemon`)
  //     setValor(res.data.results)
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }, [])


  // useEffect(() => {
  //   // request()
  //   // requestAxios()
  // }, [requestAxios])

  const toSearch = search.toLowerCase()
  const arrayValor = valor.filter(item => item.name.toLowerCase().includes(toSearch))
  return (
    <div className="App">
      <h1>Axios API</h1>
      <ul>
        {/* {
          arrayValor &&
          arrayValor.map((item, i) => (
            <li key={i}
              title='REMOVE item with DOUBLE CLICK'
            // onClick={() => {
            //   search
            //     ?
            //     setSearch('')
            //     :
            //     setSearch(item.name)
            // }}
            // onDoubleClick={() => {
            //   setValor(valor.filter((valor, index) => index !== i))
            // }}
            >
              {item.name}
            </li>
          ))
        } */}
      </ul>
    </div>
  );
}

export default App;
