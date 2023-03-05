import React, { useState, useEffect } from "react";
import axios from "axios";
import { truncateString } from '../utils';
import { Link } from 'react-router-dom';
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Search = () => {

    const { textSerach } = useParams();
    const [searching, setSearching] = useState(true);

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/search/${textSerach}/${page}`)
            .then((response) => {
                setData(response.data.results);
                setTotalPages(response.data.total_pages);
                setSearching(false);
            })
            .catch((error) => console.error(error));

    }, [textSerach, page]);


    return (
        <>
            <div className="container text-center mt-5">
                <div className="border py-5 bg-light rounded">
                    <h1 className="py-2">Serach Resluts For: {textSerach}</h1>
                    <div className="card-group  justify-content-center">
                        {searching && <Loading />}
                        {!searching && data.length > 0 ?
                            data.map((item) => (
                                <div key={item.id} className="col-lg-2 col-sm-4 col-xs-4 col-5 py-3 mx-3">
                                    <Link to={`/details/movie/${item.id}`} className="link-style" onClick={() => window.scrollTo(0, 0)}>
                                        <div className="card card-category-block">
                                            <img
                                                src={item.poster_path === null ? "/image/imageUnavailable.png" : `https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                                className="card-img-top"
                                                alt="poster"
                                                style={{ height: "300px" }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{truncateString(item.name || item.title, 30)} </h5>
                                                <h6>{item.release_date} </h6>
                                                <h6>Rating: {item.vote_average} </h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )) :
                            !searching && <h1>{data.length === 0 ? "Not found" : ""}</h1>
                        }
                    </div>

                    {data.length !== 0 && <Pagination setPage={setPage} untilPage={totalPages} />}

                </div>
            </div>
        </>
    );
}

export default Search;