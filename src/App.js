
import './App.css';
import {Car,Location} from './Car'
function App() {
  return (
    <div className="App">
     <h1>Range rover</h1>
      <Car />
     <Location CompanyName="Range Rover" CityName="Tirupur"/>
    </div>
  );
}

export default App;
