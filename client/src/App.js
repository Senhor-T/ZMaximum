import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu';
import Animes from './pages/animesSeriesFilmes/Animes';
import Filmes from './pages/animesSeriesFilmes/Filmes';
import Series from './pages/animesSeriesFilmes/Series';
import Home from './pages/home/Home';
import Single from './pages/single/Single';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filmes' element={<Filmes />} />
          <Route path='/series' element={<Series />} />
          <Route path='/animes' element={<Animes />} />
          <Route path='/single' element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
