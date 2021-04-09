//import logo from './logo.svg';
//import './App.css';
import { Switch, Route, BrowserRouter  as  Router } from "react-router-dom";

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from "./Component/Navbar";
function App() {
  return (
      <>
          <Router>
              <Navbar/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Singleroom/:slug" component={SingleRoom} />
              <Route exact path="/rooms/" component={Rooms} />
              <Route component={Error}/>
              </Switch>
          </Router>
          
          
    </>
  );
}

export default App;
