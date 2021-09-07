import React from 'react';


const Weather = props => {
    return (
        <div className="container">
        <div className="cards">
            <h1>
                {props.city}, {props.country}
                </h1>
            <h5 className="py-4">
                <i className="wi wi-day-sunny display-1"></i>
            </h5>
            <h1 className="oy-2">25&deg;</h1>

            {minmaxTemp(16,29)}

            <h4 className="py-3">Scattered Showers</h4>
        </div>
        </div>
    );
};

function minmaxTemp (min, max){
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
};





export default Weather;