import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";


const Details = () => {

    const { mediaType, id } = useParams();
    const [data, setData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);

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

    useEffect(() => {

        console.log(data)
    }, [data, reviewsData]);

    return (
        <>
            <div className="container py-5">
                {Object.keys(data).length > 0 ? (
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-3 d-flex justify-content-center">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                className="card-block-details"
                                alt="poster"
                            />
                        </div>
                        <div className="col  text-center">
                            <h1 className="fw-bolder ">{data.original_title}</h1>
                            <h3 className="fw-lighter">{data.overview}</h3>
                        </div>
                    </div>

                ) : (
                    <Loading />
                )}

                <div className="py-5">
                    <div className="border py-2 bg-light rounded text-center">

                        <h2>Reviews</h2>
                    </div>

                    {reviewsData.length > 0 ?
                        reviewsData.map((item, index) => (
                            <div key={index} className="py-4 ">
                                <div className="border py-2 bg-light rounded px-4">

                                    <h4>{item.author}</h4>
                                    <h6>{item.created_at}</h6>
                                    <h5>{item.content}</h5>
                                </div>
                            </div>
                        )) :
                        <h1 className="text-center mt-5">No Reviews</h1>
                    }



                </div>
            </div>




        </>
    );

}

export default Details;






