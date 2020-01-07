import React from 'react';
import svg from "../../img/icons.svg";

const Reviews = (props) => {

    const renderStars = (quantity) => {
        const maxRating = 5;
        const starsHtml = [];

        for(let i = 0; i < quantity; i++){
            starsHtml.push(
                <svg key={i} className="reviews__star reviews__star--active">
                    <use xlinkHref={`${svg}#icon-star`}></use>
                </svg>
            )
        }

        if(quantity < maxRating){
            for(let i = 0; i < (maxRating - quantity); i++){
                starsHtml.push(
                    <svg className="reviews__star reviews__star--inactive">
                        <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                )
            }
        }

        return starsHtml;
    };

    const renderReviews = () => {
        return props.reviews.map(review => (
            <div key={review.id} className="reviews__card">
                <div className="reviews__avatar">
                    <img
                        src={require(`../../img/users/${review.user[0].photo}`)}
                        alt="Jim Brown"
                        className="reviews__avatar-img"
                    />
                    <h6 className="reviews__user">{review.user[0].name}</h6>
                </div>
                <p className="reviews__text">
                    {review.review}
                </p>
                <div className="reviews__rating">
                    {renderStars(review.rating)}
                </div>
            </div>
        ))
    };


    if(!props.reviews){
        return (
            <div>
                Loading...
            </div>
        );
    } else {
        return (
            <section className="section-reviews">
                <div className="reviews">
                    {renderReviews()}
                </div>
            </section>
        );
    }
};

export default Reviews;