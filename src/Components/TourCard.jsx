import React from 'react';
import svg from "../img/icons.svg";
import { Link } from "react-router-dom";

const TourCard = (props) => {

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img
                        src={props.cover}
                        alt="Tour 1"
                        className="card__picture-img"
                    />
                </div>

                <h3 className="heading-tertirary">
                    <span>{props.title}</span>
                </h3>
            </div>

            <div className="card__details">
                <h4 className="card__sub-heading">{props.subHeading}</h4>
                <p className="card__text">
                    {props.text}
                </p>
                <div className="card__data">
                    <svg className="card__icon">
                        <use xlinkHref={`${svg}#icon-map-pin`}></use>
                    </svg>
                    <span>{props.location}</span>
                </div>
                <div className="card__data">
                    <svg className="card__icon">
                        <use xlinkHref={`${svg}#icon-calendar`}></use>
                    </svg>
                    <span>{props.date}</span>
                </div>
                <div className="card__data">
                    <svg className="card__icon">
                        <use xlinkHref={`${svg}#icon-flag`}></use>
                    </svg>
                    <span>{props.stops}</span>
                </div>
                <div className="card__data">
                    <svg className="card__icon">
                        <use xlinkHref={`${svg}#icon-user`}></use>
                    </svg>
                    <span>{props.people}</span>
                </div>
            </div>

            <div className="card__footer">
                <p>
                    <span className="card__footer-value">${props.price}</span>
                    <span className="card__footer-text">per person</span>
                </p>
                <p className="card__ratings">
                    <span className="card__footer-value">{props.rating}</span>
                    <span className="card__footer-text">rating ({props.ratingsQuantity})</span>
                </p>
                <Link to={`/tours/${props.id}`} className="btn btn--green btn--small">Details</Link>
            </div>
        </div>
    );
};

export default TourCard;