import './App.css';
import Day from './Components/Day'


function App() {
  
  return (
    <div className="App">
      <div id="box">
    <Day dow='Monday' />
    <Day dow='Tuesday' />
    <Day dow='Wednesday' />
    <Day dow='Thursday' />
    <Day dow='Friday' />
    <Day dow='Saturday' />
    <Day dow='Sunday' />
    </div>
    </div>
  );
}

export default App;
