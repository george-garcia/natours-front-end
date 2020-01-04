import React from 'react';
import img from '../img/tours/tour-1-cover.jpg';
import Card from "./Card";

const Overview = () => {
    return (
        <div>
            <main className="main">
                <div className="card-container">
                    <Card cover={img} title={"The Forest Hiker"} subHeading={"Easy 5-day tour"}
                    text={"Breathtaking hike through the Canadian Banff National Park"}
                    location={"Banff, Canada"} date={"April 2021"} stops={"3 stops"} people={"25 people"}
                    price={297} rating={4.9}/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </main>
        </div>
    );
};

export default Overview;