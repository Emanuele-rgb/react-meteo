import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container-custom">
      <div className="Card">
        

        <div className="box-left">
          {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-5">{props.temp_celsius}&deg;</h1>
        ) : null}
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>
        </div>
        

        <div className="box-left-big">
          <div className="text-box-big">
        <h1 className="py-3">{props.cityname}</h1>
        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
            
        </h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="">Min: {min}&deg;</span>
        <span className="">Max: {max}&deg;</span>
      </h3>
    );
  }
}
