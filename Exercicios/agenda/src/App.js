import './App.css';
import React, { useState} from 'react'
// Components
import Adicionar from './components/adicionar.component/Index'
import Lista from './components/lista.component/Index'

function App() {
  const [lista, setLista] = useState([])
  const [txtTarefa, setTextTarefa] = useState()
  const [txtData, setTxtData] = useState()

  const add = () => {
    if(!txtTarefa){ return }
    if(!txtData){ return }

    const body = {
      id: Math.random(),
      tarefa: txtTarefa,
      data: txtData,
      status: false
    }

    setLista([...lista, body])
    limparCampos()
  }

  const limparCampos = () => {
    document.querySelector('input[type="text"]').value = ''
    document.querySelector('input[type="datetime-local"]').value = ''
    setTextTarefa('')
    setTxtData('')
  }

  const updateStatus = (id) => {
    const array = lista.map((item) => item.id === id ? {...item, status: true} : item)
    setLista([...array])
  }

  return (
    <div className="App">
      <Adicionar tarefa={setTextTarefa} data={setTxtData} evento={add}/>

      <ul>
        {
          lista.map((item) => (
            <Lista key={item.id} 
              id={item.id} 
              tarefa={item.tarefa} 
              data={item.data} 
              status={item.status}
              evento={updateStatus}  
            />
          ))
        }

      </ul>
    </div>
  );
}

export default App;
