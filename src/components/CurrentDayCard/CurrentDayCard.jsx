import React from "react";
import Clock from "../Clock/Clock";
import "./CurrentDayCard.scss";

function CurrentDayCard({ temp, city, icon }) {
  return (
    <div className="current-day-card">
      <div className="current-day-card_top">
        <div className="left">
          <div className="temperature">{temp}°</div>
          <div className="today">Сегодня</div>
        </div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="погода" />
      </div>
      <div className="current-day-card_bottom">
        <div className="time">
          Время: <Clock />
        </div>
        <div className="city">Город: {city}</div>
      </div>
    </div>
  );
}

export default CurrentDayCard;
