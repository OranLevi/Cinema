import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import Loading from "../Loading";

const HeaderDetails = (props) => {

    const { mediaType, id } = useParams();

    const [ButtonActive, setButtonActive] = useState(false)
    const [addButtonTitle, setButtonTitle] = useState("Add to Watch List")
    const [isMovieInWatchList, setisMovieInWatchList] = useState(false)

    useEffect(() => {
        async function checkIfAdded() {
            if (props.isLoggedIn && props.userData && props.userData.watchList) {
                const found = props.userData.watchList.some(user => user.id === id);
                if (found) {
                    setButtonActive(true);
                    setButtonTitle("Already added");
                    return;
                }
            }
        }
        checkIfAdded();
    }, [props.isLoggedIn, props.userData, id]);

    async function addToWatchList() {

        if (props.isLoggedIn) {
            if (!isMovieInWatchList) {
                try {
                    const cookie = new Cookies();
                    const getCookieId = cookie.get('cinemaUserId');
                    const configuration = {
                        method: "post",
                        url: `http://localhost:3001/watchlist/${mediaType}/${id}/${getCookieId}`,
                        data: {
                            getCookieId,
                            mediaType,
                            id
                        },
                    };
                    await axios(configuration);
                    setisMovieInWatchList(true);
                    setButtonActive(true)
                    setButtonTitle("Added");
                } catch (error) {
                    console.error(error);
                }
            }
        } else {
            alert("You must be logged in")
        }
    }

    return (
        <div >
            {Object.keys(props.data).length > 0 ? (
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
                        <img
                            src={props.data.poster_path === null ? "/image/imageUnavailable.png" : `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
                            className="card-block-details w-100"
                            alt="poster"
                        />
                    </div>
                    <div className="col-md-8">
                        <h1 className="fw-bolder mb-3">{props.data.original_title || props.data.original_name}</h1>
                        <h3 className="fw-lighter">{props.data.overview ? props.data.overview : <h3>No overview found</h3>} </h3>
                        <button type="button" className="btn btn-primary mt-5" disabled={ButtonActive} onClick={() => { addToWatchList() }}>{addButtonTitle}</button>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default HeaderDetails;