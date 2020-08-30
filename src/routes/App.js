import React from 'react';
import { BrowserRouter,Switch,HashRouter as Router,Route,Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import '../assets/styles/App.scss';
import Login from '../containers/Admin';
import Categories from '../containers/Categories';
import CourseList from '../containers/CourseList';
import Teachers from '../containers/Teachers';
import TeachersMakers from '../containers/TeachersMakers';
import Student from '../containers/Student';
import Trash from '../containers/Trash';
import NotFound from '../containers/NotFound';


const App = () => (
    // Arreglar para produccion las rutas
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/admin" component={Login} />
            <PrivateRoute path="/cursos" component={CourseList} />
            <PrivateRoute path="/categorias" component={Categories} />
            <PrivateRoute path="/profesores" component={Teachers} />
            <PrivateRoute path="/profesores-creacion" component={TeachersMakers} />
            <PrivateRoute path="/alumnos" component={Student} />
            <PrivateRoute path="/papelera" component={Trash} />
            <Route component={Login} />
        </Switch>
    </BrowserRouter>
)

export default App;