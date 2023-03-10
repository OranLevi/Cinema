import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import PagesCategory from './Pages/PagesCategory';
import Footer from './components/Footer';
import Details from './Pages/Details';
import Search from './components/Search';
import MyAccount from './Pages/MyAccount';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/movies/popular" element={<PagesCategory pageName="Popular Movies" />} />
        <Route path="/movies/toprated" element={<PagesCategory pageName="Top rated Movies" />} />
        <Route path="/movies/upcoming" element={<PagesCategory pageName="Upcoming Movies" />} />
        <Route path="/tvshows/popular" element={<PagesCategory pageName="Popular Tv Shows" />} />
        <Route path="/tvshows/toprated" element={<PagesCategory pageName="Top rated Tv Shows" />} />
        <Route path="/details/:mediaType/:id" element={<Details />} />
        <Route path="/search/:textSerach" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
