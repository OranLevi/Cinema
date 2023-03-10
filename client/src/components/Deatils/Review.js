import React, { useState } from "react";

const Review = (props) => {

    function ReviewItem({ review }) {
        const [isReadMore, setIsReadMore] = useState(true);

        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };

        return (
            <div className="py-4 ">
                <div className="border py-2 bg-light rounded px-4">
                    <h4>{review.author}</h4>
                    <h6>{new Date(review.created_at).toLocaleString()}</h6>

                    <h5>{isReadMore ? review.content.slice(0, 150) : review.content}
                        <span className="text-secondary" onClick={toggleReadMore}>
                            {isReadMore ? "...read more" : " ...show less"}
                        </span>
                    </h5>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="py-5">
                <div className="border py-2 bg-light rounded text-center">
                    <h2>Reviews</h2>
                </div>
                {props.reviewsData.length > 0 ? (
                    props.reviewsData.map((review, index) => (
                        <ReviewItem key={index} review={review} />
                    ))
                ) : (
                    <h1 className="text-center mt-5">No Reviews</h1>
                )}
            </div>
        </>
    );
}

export default Review;