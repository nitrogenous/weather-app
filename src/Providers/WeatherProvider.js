import {createContext} from 'react';
import {sendRequest, createURLWithKey} from '../Utils';
import {getWeatherByCityURL} from '../Utils/serviceUrls';

const WeatherContext = createContext();
const { Provider, Consumer: WeatherConsumer } = WeatherContext;

const WeatherProvider = ({children}) => {
  
  const getWeatherByCity = async (cityName) => {
    const requestURL = createURLWithKey(getWeatherByCityURL.replace('{CITY}', cityName));
    const weatherData = await sendRequest(requestURL);

    return weatherData;
  };

  return  <Provider value={{getWeatherByCity}} >{children}</Provider>
};

export {WeatherContext, WeatherProvider, WeatherConsumer};
