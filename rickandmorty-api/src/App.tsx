import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Inicio } from './pages/Inicio';
import { Footer } from './components/footer/footer';
import { GridEpisodes } from './components/grid-episodios/GridEpisodios';
import { GridLocations } from './components/grid-locations/GridLocations';
import { GridCharacters } from './components/grid-characters/GridCharacters';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={Inicio} />
          <Route path="/episodes" Component={GridEpisodes} />
          <Route path="/locations" Component={GridLocations} />
          <Route path="/characters" Component={GridCharacters} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
