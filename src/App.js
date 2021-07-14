import { Route, Switch } from "react-router-dom";

import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";


function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/">
          <Login/>
        </Route> */}
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
