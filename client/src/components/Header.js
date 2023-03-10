import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Loading from "./Loading";

const Header = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/header/`)
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <header className="bg-dark">
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        {data.length > 0 ? data.slice(0, 3).map((item, index) => (
                            <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <Link to={`/details/movie/${item.id}`} className="link-style">
                                    <img className="d-block w-100" src={item.backdrop_path === null ? "/image/imageUnavailable.png" : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="backdrop" />
                                    <div className="carousel-caption ">
                                        <h5>{item.title}</h5>
                                        <p className="d-none d-md-block">{item.overview}</p>
                                    </div>
                                </Link>
                            </div>

                        )) : <Loading colorText="white" />}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </header>

    );
}

export default Header;