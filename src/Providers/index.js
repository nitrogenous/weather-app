import React from 'react';
import { WeatherProvider } from './WeatherProvider';

const Providers = ({children}) => {
  return <WeatherProvider>
      {children}
    </WeatherProvider>
 ;
};

export default Providers;
