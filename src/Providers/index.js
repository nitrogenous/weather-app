import React from 'react';
import { WeatherProvider } from './WeatherProvider';
import { StorageProvider } from './StorageProvider';

const Providers = ({children}) => {
  return (
    <StorageProvider>
      <WeatherProvider>
        {children}
      </WeatherProvider>
    </StorageProvider>
  );
};

export default Providers;
