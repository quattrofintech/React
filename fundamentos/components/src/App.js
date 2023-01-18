// import logo from './logo.svg';
import './App.css';

// Components 
import First from './components/First'
import Aluno from './components/Aluno';
import Paragrafo from './components/Paragrafo';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <h1>Componentes</h1>
      <Aluno />
      <Lista />
      <First />
      <Paragrafo />
    </div>
  );
}

export default App;
