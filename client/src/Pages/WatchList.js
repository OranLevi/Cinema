import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const WatchList = (props) => {
  const [dataToShow, setDateToShow] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    props.userDeatils.watchList.forEach((item) => {
      const { id, mediaType } = item;
      axios
        .get(`http://localhost:3001/details/${mediaType}/${id}`)
        .then((response) => {
          setDateToShow((prevState) => [
            ...prevState,
            { ...response.data, mediaType: mediaType }
          ]);
        })
        .catch((error) => console.error(error));
    });

  }, [props.userDeatils.watchList, setDateToShow]);

  async function removeFromWatchList(idDeatils) {

    try {
      const cookie = new Cookies();
      const getUserId = cookie.get('cinemaUserId');
      const configuration = {
        method: "put",
        url: `http://localhost:3001/watchlist/remove/${getUserId}/${idDeatils}`,
        data: {
          getUserId,
          idDeatils,
        },
      };
      await axios(configuration);
      setDateToShow(prevState => prevState.filter(item => item.id !== idDeatils));
      navigate(0);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="container text-center mt-5">
        <div className="border py-5 bg-light rounded">
          <h1>Watch List</h1>

          <div className="card-group  justify-content-center">

            {Object.keys(dataToShow).length > 0 ? (
              dataToShow.map((item, index) => (
                <div className="col-lg-2 col-sm-4 col-xs-4 col-5 py-3 mx-3" key={index}>
                  <Link to={`/details/${item.mediaType}/${item.id}`} className="link-style" onClick={() => window.scrollTo(0, 0)}>
                    <div className="card card-category-block">
                      <img
                        src={item.poster_path === null ? "/image/imageUnavailable.png" : `https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        className="card-img-top"
                        alt="poster"
                        style={{ height: "300px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name || item.title}</h5>
                        <h6>{item.release_date || item.first_air_date}</h6>
                        <h6>Rating: {item.vote_average}</h6>
                      </div>
                      <button type="button" className="btn btn-primary mb-2" onClick={(event) => { event.preventDefault(); removeFromWatchList(item.id) }}>Remove</button>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="py-5">
                <h3>Empty list</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchList;
