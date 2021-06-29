import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Events from "./Pages/Events";
import Upload from "./Pages/Upload";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
          <switch>
              <Route path="/" exact component={Main}/>
              <Route path="/events" exact component={Events}/>
              <Route path="/upload" exact component={Upload}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/register" exact component={Register}/>
          </switch>
      </div>
    </Router>
  );
}

export default App;
