import './App.scss';
import Header from './components/Header/Header';
import ContWithWeatherCard from './containers/ContWithWeatherCard/ContWithWeatherCard';
import { API_KEY } from './config';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [dark, setDark] = useState(false)

  const handleToggleTheme = () => {
    setDark((prev) => !prev)
  }
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = (city='могилёв') => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  } 
  return (
    <div className={`App ${dark? 'dark':''}`}>
      <div className="app-cont">
      <Header
      handleToggleTheme={handleToggleTheme}
      fetchData={fetchData} />
      <ContWithWeatherCard
      weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
