import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { truncateString } from '../utils';

const CardsCategory = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/card/${props.category}/${props.mediaType}`)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [props.category, props.mediaType]);

  useEffect(() => {
    console.log(data.results);
  }, [data]);


  return (
    <>
      <div className="card-group justify-content-center">
        {data.length > 0 ?
          data.map((item) => (
            <div key={item.id} className="col-lg-2 col-sm-4 col-xs-4 col-4 py-3 mx-3">
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
            </div>
          )) :
          <Loading />
        }

      </div>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="/#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="/#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="/#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="/#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="/#">Next</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default CardsCategory;