import React, { useState, useEffect, useCallback } from "react";
import { truncateString } from '../utils';
import { Link } from 'react-router-dom';
import axios from "axios";
import Loading from "./Loading";
import Pagination from "./Pagination";

const CardsCategory = (props) => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleFilterSortBy = useCallback(() => {
    switch (props.sortBy) {
      case "Title (A-Z)":
        setData((d) => [...d].sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title)));
        break;
      case "Title (Z-A)":
        setData((d) => [...d].sort((a, b) => (b.name || b.title).localeCompare(a.name || a.title)));
        break;
      case "Release Date new to old":
        setData((d) => [...d].sort((a, b) => (b.release_date || b.release_date).localeCompare(a.release_date || a.release_date)));
        break;
      case "Release Date old to new":
        setData((d) => [...d].sort((a, b) => (a.release_date || a.release_date).localeCompare(b.release_date || b.release_date)));
        break;
      case "Rating High to Low":
        setData((d) => [...d].sort((a, b) => b.vote_average - a.vote_average));
        break;
      case "Rating Low to High":
        setData((d) => [...d].sort((a, b) => a.vote_average - b.vote_average));
        break;
      default:
        break;
    }
  }, [props.sortBy]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/card/${props.category}/${props.mediaType}/${page}`)
      .then((response) => {
        setData(response.data.results);
        setTotalPages(response.data.total_pages);
        handleFilterSortBy()
      })
      .catch((error) => console.error(error));
  }, [props.category, props.mediaType, page]);

  useEffect(() => {
    handleFilterSortBy({ preventDefault: () => { } });

  }, [handleFilterSortBy,setData]);

  return (
    <>
      <div className="card-group d-flex justify-content-center">
        {data.length > 0 ?
          data.map((item) => (
            <div key={item.id} className="col-lg-2 col-sm-4 col-xs-6 col-5 py-3 mx-3">
              <Link to={`/details/${props.mediaType}/${item.id}`} className="link-style" onClick={() => window.scrollTo(0, 0)}>

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
          <Loading />
        }

      </div>

      <Pagination setPage={setPage} untilPage={totalPages} />

    </>
  );
}

export default CardsCategory;