import { Route, Switch } from "react-router-dom";
import EmployeeManagement from "./views/Employee";
import EmployeeDetail from "./views/Employee/EmployeeDetail";
import EmployeeRegister from "./views/Employee/EmployeeRegister";
import DivisionManagement from "./views/Division/";
import DivisionDetail from "./views/Division/DivisionDetail";
import DivisionRegister from "./views/Division/DivisionRegister";
import CompanyManagement from "./views/Company";
import CompanyRegister from "./views/Company/CompanyRegister";
import CompanyDetail from "./views/Company/CompanyDetail";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ProfileDetail from "./views/Profile/ProfileDetail";
import Branch from "./views/Branch/";
import BranchRegister from "./views/Branch/BranchRegister";
import BranchDetail from "./views/Branch/BranchDetail";
import Project from "./views/Project/ProjectManagement";
import ProjectRegister from "./views/Project/ProjectRegister";
import ProjectDetail from "./views/Project/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/employee" exact>
          <EmployeeManagement />
        </Route>
        <Route path="/employee/register" exact>
          <EmployeeRegister />
        </Route>
        <Route path="/employee/detail" exact>
          <EmployeeDetail />
        </Route>
        <Route path="/division" exact>
          <DivisionManagement />
        </Route>
        <Route path="/division/register" exact>
          <DivisionRegister />
        </Route>
        <Route path="/division/detail" exact>
          <DivisionDetail />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/branch">
          <Branch />
        </Route>
        <Route exact path="/branch/register">
          <BranchRegister />
        </Route>
        <Route exact path="/branch/detail">
          <BranchDetail />
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
        <Route exact path="/profile/detail">
          <ProfileDetail />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/project/register">
          <ProjectRegister />
        </Route>
        <Route exact path="/project/detail">
          <ProjectDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
