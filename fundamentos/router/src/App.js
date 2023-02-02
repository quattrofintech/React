import './App.css';

// React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// TEMPLATES
import Header from './templates/header.template/Header';

// PAGES
import Home from './pages/home.page/Home';
import Contato from './pages/contato.page/Contato';
import Alunos from './pages/alunos.page/Alunos';
import Aluno from './pages/aluno.page/Aluno';
import NotFound from './pages/notfound.page/NotFound';

function App() {
  const alunos = [
    {
        id: Math.floor(Math.random() * 10000),
        nome: 'Maria',
        avatar: 'https://trecobox.com.br/wp-content/uploads/2019/01/Aimee.jpg',
        situacao: true,
    },
    {
        id: Math.floor(Math.random() * 10000),
        nome: 'João',
        avatar: 'https://portalpopline.com.br/wp-content/uploads/2022/12/asa-butterfield-capa.jpg',
        situacao: false,
    },
    {
        id: Math.floor(Math.random() * 10000),
        nome: 'Luana',
        avatar: 'https://epipoca.com.br/wp-content/uploads/2021/10/Ola-Patricia-Allison-em-Sex-Education-Reproducao-scaled-3756x2817.jpg',
        situacao: true,
    },
    {
        id: Math.floor(Math.random() * 10000),
        nome: 'Thiago',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6BwLK-YEli3IG5amgxzBhmOgPdkqgF6pg9HY7DBdKEWHa4OuKAkEWxYLIhXmg1Tzd_k&usqp=CAU',
        situacao: true,
    },
    {
        id: Math.floor(Math.random() * 10000),
        nome: 'Pedro',
        avatar: 'https://pbs.twimg.com/media/EOmSxO-UUAAcbls.jpg',
        situacao: true,
    },
  ]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/alunos' element={<Alunos alunos={alunos} />} />
        
        {/* Rota Dinamica */}
        <Route path='/aluno/:id' element={<Aluno alunos={alunos} />}/>

        {/* Redirecionar */}
        <Route path='/home' element={<Navigate to='/alunos' />} />

        {/* Not Found */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
