import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu';
import Animes from './pages/animesSeriesFilmes/Animes';
import Filmes from './pages/animesSeriesFilmes/Filmes';
import Series from './pages/animesSeriesFilmes/Series';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';


import { UserProvider } from './context/UserContext';
import CreateContent from './pages/admin/CreateContent';
import CreateSerie from './pages/admin/CreateSerie';
import CreateAnime from './pages/admin/CreateAnime';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filmes' element={<Filmes />} />
          <Route path='/series' element={<Series />} />
          <Route path='/animes' element={<Animes />} />
          {/* <Route path='/single' element={<Single />} /> */}
          <Route path='/:shortid' element={<Single />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create/movies' element={<CreateContent />} />
          <Route path='/create/series' element={<CreateSerie />} />
          <Route path='/create/animes' element={<CreateAnime />} />

        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
