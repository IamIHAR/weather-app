import React from 'react'
import './WeekWeatherCard.scss'

function WeekWeatherCard({ currentDate, tempMax, description, icon }) {
  return (
    <div className='week-weather-card'>
        <div className='current-date'>{currentDate}</div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <div className='current-temp'>{tempMax}°</div>
        <div className='current-desc'>{description}</div>

    </div>
  )
}

export default WeekWeatherCard