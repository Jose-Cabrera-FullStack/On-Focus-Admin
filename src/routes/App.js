import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
    <Router>
            <Route exact path="/" component={Login}/>
            <Route path="/admin" component={Login} />
            <PrivateRoute path="/cursos" component={CourseList} />
            <PrivateRoute path="/categorias" component={Categories} />
            <PrivateRoute path="/profesores" component={Teachers} />
            <PrivateRoute path="/profesores-creacion" component={TeachersMakers} />
            <PrivateRoute path="/alumnos" component={Student} />
            <PrivateRoute path="/papelera" component={Trash} />
    </Router>
)

export default App;