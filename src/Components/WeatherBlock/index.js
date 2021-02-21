import { useContext, useState, useCallback, useEffect } from 'react';
import { WeatherContext } from '../../Providers/WeatherProvider';

const WeatherBlock = (props) => {
  const { getWeatherByCity } = useContext(WeatherContext);
  const [weatherDetails, setWeatherDetails] = useState({});
  const { cityName } = props;

  const getWeatherData = useCallback(async () => {
    const weatherData = await getWeatherByCity(cityName);

    setWeatherDetails(weatherData);
  }, [getWeatherByCity, cityName]);

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return (
    <div className="weather-block">
      <span>{weatherDetails?.location?.name} </span>
      <span>{weatherDetails?.current?.condition?.text} </span>
      <span>{weatherDetails?.current?.temp_c}c</span>      
    </div>
  );
};

export default WeatherBlock;
