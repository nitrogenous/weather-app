import Providers from './Providers/index';
import WeatherList from './Containers/WeatherList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Providers>
        <WeatherList />
      </Providers>
    </div>
  );
}

export default App;
