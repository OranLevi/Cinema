import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import Companies from "../components/Deatils/Companies";
import HeaderDetails from "../components/Deatils/HeaderDetails";
import MoreDetails from "../components/Deatils/MoreDetails";
import Review from "../components/Deatils/Review";

const cookies = new Cookies();

const Details = () => {

    const { mediaType, id } = useParams();
    const location = useLocation();

    const [data, setData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [reviewsData, setReviewsData] = useState([]);
    const [addButtonTitle, setButtonTitle] = useState("Add to watch list")
    const [buttonDisable, setButtonDisable] = useState(false)

    useEffect(() => {
        const token = cookies.get('cinemaToken');
        setIsLoggedIn(!!token);
    }, [location, setIsLoggedIn]);

    useEffect(() => {
        const getCookie = cookies.get('cinemaUserId')
        axios.get(`http://localhost:3001/profile/${getCookie}`).then((response) => {
            setUserData(response.data[0]);
            if (isLoggedIn) {
                const found = response.data[0].watchList.some(user => user.id === id);
                if (found) {
                    setButtonDisable(true)
                    setButtonTitle("Already added");
                } else {
                    setButtonDisable(false)
                }
            }
        });
    }, [isLoggedIn, id]);

    useEffect(() => {
        Promise.all([
            axios.get(`http://localhost:3001/details/${mediaType}/${id}`),
            axios.get(`http://localhost:3001/reviews/${mediaType}/${id}`),
        ])
            .then((response) => {
                const [dataResponse, reviewsResponse] = response;
                setData(dataResponse.data);

                setReviewsData(reviewsResponse.data.results);
            })
            .catch((error) => console.error(error));
    }, [mediaType, id]);

    return (
        <>
            <div className="container py-5" >
                <HeaderDetails data={data} isLoggedIn={isLoggedIn} userData={userData} addButtonTitle={addButtonTitle} buttonDisable={buttonDisable} />
                <Companies data={data} />
                <MoreDetails data={data} />
                <Review reviewsData={reviewsData} />
            </div>
        </>
    );

}

export default Details;