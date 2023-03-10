import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Cinema</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movies
                                </a>
                                <ul className="dropdown-menu" style={{ margin: 0 }}>
                                    <Link className="dropdown-item" to="/movies/popular">Popular</Link>
                                    <Link className="dropdown-item" to="/movies/upcoming">Upcoming</Link>
                                    <Link className="dropdown-item" to="/movies/toprated">Top Rated</Link>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tv Shows
                                </a>
                                <ul className="dropdown-menu" style={{ margin: 0 }}>
                                    <Link className="dropdown-item" to="/tvshows/popular">Popular</Link>
                                    <Link className="dropdown-item" to="/tvshows/toprated">Top Rated</Link>
                                </ul>
                            </li>
                        </ul>
                        <div className='navbar-nav  mb-2 mb-lg-0 '>
                            <Link className="nav-link" to="/myaccount">My Account</Link>
                        </div>
                        <form className="d-flex" role="search">
                            <input id="searchInput" className="form-control me-2" type="search" value={searchValue} placeholder="Search" onChange={(e) => {
                                setSearchValue(e.target.value)
                            }} aria-label="Search" />
                            <Link to={`/search/${searchValue}`} className="btn btn-outline-success" onClick={() => {
                                setSearchValue("")
                            }} type="submit" >
                                Search
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;