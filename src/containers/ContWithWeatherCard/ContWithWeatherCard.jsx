import React from "react";
import CurrentDayCard from "../../components/CurrentDayCard/CurrentDayCard";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import WeatherDays from "../../components/WeatherDays/WeatherDays";
import "./ContWithWeatherCard.scss";

function ContWithWeatherCard({ weatherData }) {

  if (weatherData === null || !weatherData.list) {
    return null;
  }
  
  const currentWeather = weatherData.list[0];
  const currentCity = weatherData.city.name;
  return (
    <div className="cont-with-card">
      <div className="current-info">
        <CurrentDayCard
          icon={currentWeather.weather[0].icon}
          temp={Math.round(currentWeather.main.temp)}
          city={currentCity}
        />

        <WeatherCard
          temp={Math.round(currentWeather.main.temp)}
          feel={Math.round(currentWeather.main.feels_like)}
          pressure={currentWeather.main.pressure}
          description={currentWeather.weather[0].description}
          speed={currentWeather.wind.speed}
        />
      </div>
      <div className="weather-day-info">
      <WeatherDays
      weatherDayData={weatherData.list} />
      </div>
      
    </div>
  );
}

export default ContWithWeatherCard;
