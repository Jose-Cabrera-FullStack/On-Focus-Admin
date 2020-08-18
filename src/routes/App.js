import React from 'react';
import {BrowserRouter,Switch,HashRouter as Router,Route,Redirect} from 'react-router-dom';
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
        <Switch>
            <Redirect exact from="/" to="/admin" component={Login} />
            <Route exact path="/admin" component={Login} />
            <Route exact path="/cursos" component={CourseList} />
            <Route exact path="/categorias" component={Categories} />
            <Route exact path="/profesores" component={Teachers} />
            <Route exact path="/profesores-creacion" component={TeachersMakers} />
            <Route exact path="/alumnos" component={Student} />
            <Route exact path="/papelera" component={Trash} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default App;