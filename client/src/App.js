import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu';
import Filmes from './pages/animesSeriesFilmes/Filmes';
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
          <Route path='/single' element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
