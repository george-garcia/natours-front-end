import React from 'react';

const Guides = (props) => {

    const renderGuides = () => {



        return (
            props.tour.guides.map((tour) => (
                <div className="overview-box__detail">
                    <img
                        src={require(`../../img/users/${tour.photo}`)}
                        alt="Lead guide"
                        className="overview-box__img"
                    />
                    <span className="overview-box__label">{tour.role === "lead-guide" ? "Lead Guide" : "Tour Guide"}</span>
                    <span className="overview-box__text">{tour.name}</span>
                </div>
            ))
        );
    };

    return (
            <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

                {renderGuides()}

                {/*old data*/}
                {/*<div className="overview-box__detail">*/}
                {/*    <img*/}
                {/*        src={user19}*/}
                {/*        alt="Lead guide"*/}
                {/*        className="overview-box__img"*/}
                {/*    />*/}
                {/*    <span className="overview-box__label">Lead guide</span>*/}
                {/*    <span className="overview-box__text">Steven Miller</span>*/}
                {/*</div>*/}
                {/*<div className="overview-box__detail">*/}
                {/*    <img*/}
                {/*        src={user18}*/}
                {/*        alt="Tour guide"*/}
                {/*        className="overview-box__img"*/}
                {/*    />*/}
                {/*    <span className="overview-box__label">Tour guide</span>*/}
                {/*    <span className="overview-box__text">Lisa Brown</span>*/}
                {/*</div>*/}
                {/*<div className="overview-box__detail">*/}
                {/*    <img*/}
                {/*        src={user17}*/}
                {/*        alt="Intern"*/}
                {/*        className="overview-box__img"*/}
                {/*    />*/}
                {/*    <span className="overview-box__label">Intern</span>*/}
                {/*    <span className="overview-box__text">Max Smith</span>*/}
                {/*</div>*/}
            </div>
    );
};

export default Guides;