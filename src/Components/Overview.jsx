import React from 'react';
import img from '../img/tours/tour-1-cover.jpg';
import TourCard from "./TourCard";
import { fetchAllTours, fetchTour } from '../actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const Overview = (props) => {

    useEffect(() => {
        props.fetchAllTours();
    },[]);

    const renderTours = () => {
        const month = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return props.tours.map(tour => {
            return (
                <TourCard key={tour._id} cover={img} title={tour.name} subHeading={`${tour.difficulty} ${tour.duration}-day tour`}
                          text={tour.summary} id={tour.id}
                          location={tour.startLocation.description}
                          date={`${month[new Date(tour.startDates[0]).getMonth()]} 2021`}
                          stops={`${tour.locations.length} stops`}
                          people={`${tour.maxGroupSize} People`}
                          price={tour.price} rating={tour.ratingsAverage} ratingsQuantity={tour.ratingsQuantity}/>
            );
        });

    };

    if(!props.tours[0]){
        return (
            <div>
                Loading...
            </div>
        );
    } else {
        renderTours();
        return (
            <div>
                <main className="main">
                    <div className="card-container">
                        {renderTours()}
                    </div>
                </main>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { tours: Object.values(state.tours) }
};

export default connect(mapStateToProps, { fetchAllTours, fetchTour })(Overview);

// this.props.fetchTour('5c88fa8cf4afda39709c295d');
