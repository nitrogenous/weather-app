import {useRef} from 'react';
import {getArrayCopy} from '../../Utils';

const SearchBlock = (props) => {
  const cityNameInput = useRef('');

  const addNewLocation = () => {
    let newLocations = getArrayCopy(props.locations);
    const cityName = cityNameInput.current.value;

    if (cityName) {
      newLocations.push(cityName);
  
      props.updateLocations(newLocations);
    }
  };

  return (
    <div className="search-block">
      <input ref={cityNameInput} />
      <button onClick={addNewLocation}>Add</button>
    </div>
  );
};

export default SearchBlock;
