import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { truncateString } from '../utils';
import { Link } from 'react-router-dom';
import Pagination from "./Pagination";

const CardsCategory = (props) => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/card/${props.category}/${props.mediaType}/${page}`)
      .then((response) => {
        setData(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => console.error(error));
  }, [props.category, props.mediaType, page]);

  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <>
      <div className="card-group justify-content-center">
        {data.length > 0 ?
          data.map((item) => (
            <div key={item.id} className="col-lg-2 col-sm-4 col-xs-4 col-4 py-3 mx-3">
              <Link to={`/details/${props.mediaType}/${item.id}`} className="link-style">

                <div className="card card-category-block">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="card-img-top"
                    alt="poster"
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
          <Loading />
        }

      </div>

      <Pagination setPage={setPage} untilPage={totalPages} />

    </>
  );
}

export default CardsCategory;