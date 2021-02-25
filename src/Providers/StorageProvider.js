import { createContext } from 'react';

const StorageContext = createContext();
const { Provider, Consumer: StorageConsumer } = StorageContext;

const locationsStorageName = 'weather-app-locations';

const StorageProvider = ({children}) => {

  const saveLocationsToStorage = (locations) => {
    const encryptedLocations = encryptValues(JSON.stringify(locations));

    localStorage.setItem(locationsStorageName, encryptedLocations);
  };

  const getLocationsFromStorage = () => {
    const locations = localStorage.getItem(locationsStorageName);
    const decryptedLocations = JSON.parse(decryptValues(locations)) || [];

    return decryptedLocations;
  };

  const encryptValues = (value) => {
    return  btoa(value);
  };

  const decryptValues = (value) => {
    return atob(value);
  };

  return <Provider value={{saveLocationsToStorage, getLocationsFromStorage}}>{children}</Provider>
};

export { StorageContext, StorageProvider, StorageConsumer };