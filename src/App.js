import { Route, Switch } from "react-router-dom";

import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import ProfileBasic from "./views/Profile/ProfileBasic/ProfileBasic";
import ProfileDetail from "./views/Profile/ProfileDetail/ProfileDetail";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/home" component={Home}/>
        <Route exact path="/profile/detail" component={ProfileDetail}/>
        <Route path="/profile" component={ProfileBasic}/>

      </Switch>
    </div>
  );
}

export default App;
