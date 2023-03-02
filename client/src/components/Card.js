import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Card = (props) => {

  const [data, setData] = useState([]);
  const [mediaType, setMediaType] = useState("movie")

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    const truncated = str.slice(0, num) + '...';
    return truncated;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/card/${props.category}/${mediaType}`)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [props.category, mediaType, setMediaType]);

  useEffect(() => {
    console.log(data.results);
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="card-name">{props.cardName}</h1>ß
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
            data.map((item) => (
              <div key={item.id} className="col-lg-2 col-sm-4 col-xs-4 col-4">
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