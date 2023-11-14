import React from 'react';

const LowerSectionHeading = ({heading}: {heading:string}) => {
    return (
        <div className="sub-heading-1">
            <h4>{heading}</h4>
            <div className="temperature">
                <img src={'https://i.postimg.cc/9MSPN9VW/Image-24.jpg'}alt=""/>
                <div className="cel">
                    <div className="top">
                        <span className="value">37</span>
                        <span className="unit">&#9900;</span>
                    </div>
                    <div className="bottom">
                        <span className="today">Today</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LowerSectionHeading;