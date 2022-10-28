import React, { useState } from "react";
import WeekWeatherCard from "../WeekWeatherCard/WeekWeatherCard";
import './WeatherDays.scss'
const buttons = [
  {
    name: "12 часов",
    value: 15,
  },
  {
    name: "24 часa",
    value: 27,
  },
  {
    name: "48 часов",
    value: 51,
  },
];
function WeatherDays({ weatherDayData }) {
  const [activeButton, setActiveButton] = useState(15);
    const handleChangeHours = (value) => () => {
        setActiveButton(value)
    }
  return (
    <div className="weather-days">
      <div className="weather-days_buttons">
        {buttons.map((button) => {
          return <button className={`${activeButton === button.value? 'button-active':''}`} onClick={handleChangeHours(button.value)} key={button.name}>{button.name}</button>;
        })}
      </div>
      <div className="weather-days-cont">
      <div className={'weather-day_item'}> {weatherDayData.slice(0,activeButton / 3).map((data) => {
          return (<WeekWeatherCard
          key={data.dt_txt}
          currentDate={data.dt_txt}
          icon={data.weather[0].icon}
          tempMax={Math.round(data.main.temp_max)}
          description={data.weather[0].description}
          />)
        })}</div>
      </div>
    </div>
  );
}

export default WeatherDays;
