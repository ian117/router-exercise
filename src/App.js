import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Application from "./components/Application";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Application/>
      </Router>
    </div>
  );
}

export default App;
