import React from "react";
import "./WeatherCard.scss";
import thermometer from "../../assets/icons/thermometer.svg";
import wind from "../../assets/icons/wind.svg";
import evaporator from "../../assets/icons/evaporator.svg";
import humidity from "../../assets/icons/humidity.svg";
import cloud from '../../assets/images/cloud.png'

function WeatherCard({ temp, feel, pressure, speed, description }) {
  return (
    <div className="weather-card">
      <div className="cloud"><img src={cloud} alt="cloud" /></div>
      <div className="weather-card_item">
        <div className="sircle-icon">
          <img src={thermometer} alt="thermometer" />
        </div>
        <p>температура</p> {temp}° ощущается как {feel}°
      </div>
      <div className="weather-card_item">
        <div className="sircle-icon">
          <img src={humidity} alt="humidity" />
        </div>
        <p>давление</p> {pressure} Па
      </div>
      <div className="weather-card_item">
        <div className="sircle-icon">
          <img src={evaporator} alt="evaporator" />
        </div>
        <p>осадки</p> {description}
      </div>
      <div className="weather-card_item">
        <div className="sircle-icon">
          <img src={wind} alt="wind" />
        </div>
        <p>ветер</p> {speed} м/сек
      </div>
    </div>
  );
}

export default WeatherCard;
