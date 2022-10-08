import './App.css';
import {Header, Posts, Users} from "./components";

function App() {
  return (
    <div>
      <Header/>
        <hr/>
        <hr/>
        <hr/>
      <div>
          <Users/>
          <hr/>
          <hr/>
        {/*<Posts/>*/}
      </div>
    </div>
  );
}

export default App;
