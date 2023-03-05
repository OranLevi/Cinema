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

    return (
        <>
            <div className="container py-5" >

                <div >
                    {Object.keys(data).length > 0 ? (
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
                                <img
                                    src={data.poster_path === null ? "/image/imageUnavailable.png" : `https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                    className="card-block-details w-100"
                                    alt="poster"
                                />
                            </div>
                            <div className="col-md-8">
                                <h1 className="fw-bolder mb-3">{data.original_title}</h1>
                                <h3 className="fw-lighter">{data.overview}</h3>
                            </div>
                        </div>
                    ) : (
                        <Loading />
                    )}
                </div>

                <div className="py-5">
                    <div className="border py-2 bg-light rounded text-center ">
                        <h1>Production Companies</h1>
                        {Object.keys(data).length > 0 ?
                            <div className="scrolling-wrapper row flex-row flex-nowrap pb-4 pt-2 px-2">
                                {data.production_companies && data.production_companies.map((company, index) => (
                                    <div key={index} className="col-lg-2 col-sm-4 col-xs-4 col-4">
                                        <div className="card card-production-companies">
                                            <img
                                                src={company.logo_path === null ? "/image/imageUnavailable.png" : `https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                                                className="card-production-companies-img"
                                                alt="company logo"
                                            />

                                            <div className="card-body">
                                                <h5 className="card-title">{company.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :
                            <Loading />
                        }
                    </div>
                </div>

                <div className="">
                    <div className="border py-2 bg-light rounded text-center ">
                        <h1>More Details</h1>

                        <table className="table ">

                            <tbody>
                                <tr>
                                    <th scope="row">Release date</th>
                                    <td>{typeof data.release_date === 'undefined' || data.release_date === '' ? "N/A" : data.release_date}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Status</th>
                                    <td>{typeof data.status === 'undefined' || data.status === '' ? "N/A" : data.status}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Tagline</th>
                                    <td>{typeof data.tagline === 'undefined' || data.tagline === '' ? "N/A" : data.tagline}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Budget</th>
                                    <td>{typeof data.budget === 'undefined' || data.budget === '' ? "N/A" : data.budget}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Original language</th>
                                    <td>{typeof data.original_language === 'undefined' || data.original_language === '' ? "N/A" : data.original_language}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

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






