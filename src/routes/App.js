import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import "../assets/styles/app.scss";
import Login from "../containers/Admin";
import Categories from "../containers/Categories";
import Courses from "../containers/Courses";
import Teachers from "../containers/Teachers";
import Students from "../containers/Students";
import Trash from "../containers/Trash";
import TeachersAdd from "../containers/TeachersAdd";
import CoursesAdd from "../containers/CoursesAdd";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/admin" component={Login} />
      <PrivateRoute path="/courses" component={Courses} />
      <PrivateRoute path="/categories" component={Categories} />
      <PrivateRoute path="/teachers" component={Teachers} />
      <PrivateRoute path="/students" component={Students} />
      <PrivateRoute path="/trash" component={Trash} />
      <PrivateRoute path="/addTeachers" component={TeachersAdd} />
      <PrivateRoute path="/addCourses" component={CoursesAdd} />
      <Route component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
