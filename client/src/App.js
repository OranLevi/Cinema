import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import MoviesPopular from './Pages/Movies/MoviesPopular';
import MoviesTopRated from './Pages/Movies/MoviesTopRated';
import MoviesUpcoming from './Pages/Movies/MoviesUpcoming';
import TvShowsPopular from './Pages/TvShows/TvShowsPopular';
import TvShowsTopRated from './Pages/TvShows/TvShowsTopRated';
import Footer from './components/Footer';
import WatchList from './Pages/WatchList';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path="/movies/popular" element={<MoviesPopular />} />
        <Route path="/movies/toprated" element={<MoviesTopRated />} />
        <Route path="/movies/upcoming" element={<MoviesUpcoming />} />
        <Route path="/tvshows/popular" element={<TvShowsPopular />} />
        <Route path="/tvshows/toprated" element={<TvShowsTopRated />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
