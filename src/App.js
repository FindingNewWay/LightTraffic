import logo from "./logo.svg";
import "./App.css";
import TrafficLight from "./components/TrafficLight";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TrafficLight />
      </header>
    </div>
  );
}

export default App;
