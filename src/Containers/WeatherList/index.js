import { useState } from 'react';
import WeatherBlock from '../../Components/WeatherBlock';
import SearchBlock from '../../Components/SearchBlock';
import './index.css';

const WeatherList = () => {
  const [locations, setLocations] = useState(['Ankara']);

  const createWeatherBlocks = () => {
    return locations.map((location, key) => {
      return <WeatherBlock cityName={location} key={key}/>
    });
  };

  return (
    <div className="weather-list">
      {locations.length && createWeatherBlocks()}
      <SearchBlock locations={locations} updateLocations={setLocations}/>
    </div>
  );
};

export default WeatherList;
