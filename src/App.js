import './App.css';
import Users from "./components/Task1/Users/Users";
import Launches from "./components/Task2/Launches/Launches";
import './components/Task1/main.css';
import './components/Task2/main.css';

function App() {
  return (
    <div className="Appp">
      <Users/>
      <h2>SpaceX</h2>
    <Launches/>
    </div>
  );
}

export default App;
