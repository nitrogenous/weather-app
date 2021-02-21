import { API_KEY } from './credentials';

export const sendRequest = async (requestURL) => {  
  try {
    const response = await fetch(requestURL);
 
    return await response.json();
  }
  catch (error) {
    return error;
  }
};

export const createURLWithKey = (url) => {
  return url.replace('{API_KEY}', API_KEY);
}

export const getArrayCopy = (array) => {
  return array.map((value) => value);
};