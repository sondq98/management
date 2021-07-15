import { Route, Switch } from "react-router-dom";

import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import Profile from "./views/Profile";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
