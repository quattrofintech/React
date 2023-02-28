import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Templates
import Header from './template/header/Header';
import Footer from './template/footer/Footer';

// Pages
import Home from './pages/home/Home';
import People from './pages/people/People';
import Person from './pages/person/Person';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/person/:number' element={<Person />} />
        <Route path='/people' element={<People />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
