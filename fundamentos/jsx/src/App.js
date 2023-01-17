import './App.css';

function App() {

  const element = <p>Hello World</p>
  const link = <a href='/login' target='_blank'>Clique aqui</a>
  const texto = <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quos omnis inventore odit natus neque voluptas numquam voluptates eius, saepe velit a ut magnam dolorem modi. Excepturi, cumque perspiciatis. Animi?</p>
  const alunos = ["Akio", "Mateus", "Kenji", "Sayumi"]

  return (
    // Apenas uma tag pai
    <div className="App">
      <h1>JSX</h1>
      {element}
      {link}
      {texto}

      {/* Tags precisam ser fechadas */}
      <br />
      <img src="/logo192.png" alt="img" />
      <hr />

      {/* Diferenças de nomenclaturas */}
      <label htmlFor="teste"></label>

      <p className="teste"></p>

      <div id="teste"></div>
      <main></main>
      {
        alunos.map((aluno, i) => (
          <p>
            Codigo: <strong> {i} </strong>
            Nome: <strong> {aluno}</strong>
          </p>
        ))
      }
    </div>
  );
}

export default App;
