import React from 'react';
import svg from '../img/icons.svg';
import Map from "./Tours/Map";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTour } from "../actions";
import Guides from "./Tours/Guides";
import Reviews from "./Tours/Reviews";


const Tour = (props) => {


    useEffect(() => {
        props.fetchTour(props.match.params.tourId);
    }, []);

    if(!props.tour) {
        console.log(props);
        return (
            <div>
                Loading...
            </div>
        );

    } else {
        // a variable to make writing out our tour information faster
        const tour = props.tour;

        // This is for formatting our date data with human readable months
        const month = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const readableMonth = `${month[new Date(tour.startDates[0]).getMonth()]} 2021`;

        // Split the description into two paragraphs for formatting
        const paragraph = tour.description.split(' ');
        let firstPar = [];
        let secondPar = [];
        for (let i = 0; i < 60; i++){
            firstPar.push(paragraph[i]);
        }

        for (let i = 60; i < paragraph.length; i++){
            secondPar.push(paragraph[i]);
        }
        let firstParFinal = firstPar.join(' ');
        let secondParFinal = secondPar.join(' ');

        //This is to get the first half of the image name to pull the relevant pictures
        //The api only tells us the name of the cover image so we slice the first half of the path
        //This gives us the tour number (ex tour-6) so we can use to get the other tour pictures
        const pictureId = tour.imageCover.slice(0, 6);

        return (
            <div>
                <section className="section-header">
                    <div className="heading-box">
                        <h1 className="heading-primary">
                            <span>{tour.name}</span>
                        </h1>
                        <div className="heading-box__group">
                            <div className="heading-box__detail">
                                <svg className="heading-box__icon">
                                    <use xlinkHref={`${svg}#icon-clock`}></use>
                                </svg>
                                <span className="heading-box__text">{tour.duration}</span>
                            </div>
                            <div className="heading-box__detail">
                                <svg className="heading-box__icon">
                                    <use xlinkHref={`${svg}#icon-map-pin`}></use>
                                </svg>
                                <span className="heading-box__text">{tour.startLocation.description}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-description">
                    <div className="overview-box">
                        <div>
                            <div className="overview-box__group">
                                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                                <div className="overview-box__detail">
                                    <svg className="overview-box__icon">
                                        <use xlinkHref={`${svg}#icon-calendar`}></use>
                                    </svg>
                                    <span className="overview-box__label">Next date</span>
                                    <span className="overview-box__text">{readableMonth}</span>
                                </div>
                                <div className="overview-box__detail">
                                    <svg className="overview-box__icon">
                                        <use xlinkHref={`${svg}#icon-trending-up`}></use>
                                    </svg>
                                    <span className="overview-box__label">Difficulty</span>
                                    <span className="overview-box__text">{tour.difficulty}</span>
                                </div>
                                <div className="overview-box__detail">
                                    <svg className="overview-box__icon">
                                        <use xlinkHref={`${svg}#icon-user`}></use>
                                    </svg>
                                    <span className="overview-box__label">Participants</span>
                                    <span className="overview-box__text">{tour.maxGroupSize}</span>
                                </div>
                                <div className="overview-box__detail">
                                    <svg className="overview-box__icon">
                                        <use xlinkHref={`${svg}#icon-star`}></use>
                                    </svg>
                                    <span className="overview-box__label">Rating</span>
                                    <span className="overview-box__text">{tour.ratingsAverage} / 5</span>
                                </div>
                            </div>

                            <Guides tour={tour} />

                        </div>
                    </div>

                    <div className="description-box">
                        <h2 className="heading-secondary ma-bt-lg">About {tour.name} tour</h2>
                        <p className="description__text">
                            {firstParFinal}
                        </p>
                        <p className="description__text">
                            {secondParFinal}
                        </p>
                    </div>
                </section>


                <section className="section-pictures">
                    <div className="picture-box">
                        <img
                            className="picture-box__img picture-box__img--1"
                            src={require(`../img/tours/${pictureId}-1.jpg`)}
                            alt="The Park Camper Tour 1"
                        />
                    </div>
                    <div className="picture-box">
                        <img
                            className="picture-box__img picture-box__img--2"
                            src={require(`../img/tours/${pictureId}-2.jpg`)}
                            alt="The Park Camper Tour 1"
                        />
                    </div>
                    <div className="picture-box">
                        <img
                            className="picture-box__img picture-box__img--3"
                            src={require(`../img/tours/${pictureId}-3.jpg`)}
                            alt="The Park Camper Tour 1"
                        />
                    </div>
                </section>

                <Map tour={tour}/>

                <Reviews reviews={ tour.reviews } />

            </div>
        );
    }
};

const mapStateToProps = (state, prevProps) => {

    const id = prevProps.match.params.tourId;

    return { tour: state.tours[id] }

};

export default connect(mapStateToProps, { fetchTour })(Tour);