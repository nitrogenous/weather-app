import { useState, useContext, useEffect } from 'react';
import { StorageContext } from '../../Providers/StorageProvider';
import WeatherBlock from '../../Components/WeatherBlock';
import SearchBlock from '../../Components/SearchBlock';
import './index.css';

const WeatherList = () => {
  const [locations, setLocations] = useState([]);
  const { saveLocationsToStorage, getLocationsFromStorage } = useContext(StorageContext); 

  const createWeatherBlocks = () => {
    return locations.map((location, key) => {
      return <WeatherBlock cityName={location} key={key}/>
    });
  };

  useEffect(() => {
    const locationsFromStorage = getLocationsFromStorage();

    setLocations(locationsFromStorage.length ? locationsFromStorage : []);
  }, [getLocationsFromStorage])

  useEffect(() => {
    saveLocationsToStorage(locations);
  }, [saveLocationsToStorage, locations]);

  return (
    <div className="weather-list">
      {locations.length ? createWeatherBlocks() : ''}
      <SearchBlock locations={locations} updateLocations={setLocations}/>
    </div>
  );
};

export default WeatherList;
