import { Link } from 'react-router-dom';

const Navbar = () => {
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/watchlist">Watch List</Link>
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
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;