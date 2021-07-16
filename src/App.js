import { Route, Switch } from "react-router-dom";
import DivisionManagement from "./views/DivisionManagement";
import DivisionDetail from "./views/DivisionDetail";
import DivisionRegister from "./views/DivisionRegister";

import CompanyManagement from "./views/CompanyManagement";
import CompanyRegister from "./views/CompanyRegister";
import CompanyDetail from "./views/CompanyDetail";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ProfileDetail from "./views/Profile/ProfileDetail";
import Branch from "./views/Branch";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/division" exact>
          <DivisionManagement />
        </Route>
        <Route path="/division/register" exact>
          <DivisionRegister />
        </Route>
        <Route path="/division/detail" exact>
          <DivisionDetail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/branch">
          <Branch />
        </Route>
        <Route exact path="/company">
          <CompanyManagement />
        </Route>
        <Route exact path="/company/register">
          <CompanyRegister />
        </Route>
        <Route exact path="/company/update">
          <CompanyDetail />
        </Route>
        <Route path="/profile/detail">
          <ProfileDetail />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
