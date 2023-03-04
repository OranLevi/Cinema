import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { truncateString } from '../utils';
import { Link } from 'react-router-dom';

const Card = (props) => {

  const [data, setData] = useState([]);
  const [mediaType, setMediaType] = useState("movie")
  const [page, setPage] = useState("1")

  useEffect(() => {
    axios
      .get(`http://localhost:3001/card/${props.category}/${mediaType}/${page}`)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [props.category, mediaType, page]);


  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="card-name">{props.cardName}</h1>
            </div>
            <div className="col-auto ">
              {props.category === "trending" && <button type="button" className={`btn  me-2 ${mediaType === "all" ? 'btn-secondary' : 'btn-light'}`} onClick={() => { setMediaType("all") }}>All</button>}
              <button type="button" className={`btn  me-2 ${mediaType === "movie" ? 'btn-secondary' : 'btn-light'}`} onClick={() => { setMediaType("movie") }}>Moveis</button>
              {props.category !== "upcoming" && <button type="button" className={`btn  me-2 ${mediaType === "tv" ? 'btn-secondary' : 'btn-light'}`} onClick={() => { setMediaType("tv") }}>Tv Shows</button>}
            </div>
          </div>
        </div>

        <p className="subtitle pt-2">{props.subtitle}</p>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt- pb-4 pt-2">
          {data.length > 0 ?
            data.map((item, index) => (
              <div key={index} className="col-lg-2 col-sm-4 col-xs-4 col-4">
                <Link to={`/details/${mediaType === "all" ? item.media_type : mediaType}/${item.id}`} className="link-style">

                  <div className="card card-block">

                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      className="card-img-top"
                      alt="poster"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{truncateString(item.name || item.title, 30)} </h5>
                    </div>
                  </div>
                </Link>

              </div>
            )) :
            <Loading />
          }
        </div>
      </div>
    </>
  );
};

export default Card;
