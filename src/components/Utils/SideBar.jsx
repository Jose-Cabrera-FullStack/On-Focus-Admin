import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from '../../assets/static/images/svg/logo-small.svg';


import '../../assets/styles/components/SideBar.scss';

const SideBar = () => {
  return(
    <section className="side__bar">
            <img className="side__bar__img" src={Logo} alt="Logo de Focus Minds"/>
            <ol>
                <NavLink activeClassName="side__bar--select" to="/cursos"><li>Curso</li></NavLink>
                <NavLink activeClassName="side__bar--select" to="/categorias"><li>Categorías</li></NavLink>
                <NavLink activeClassName="side__bar--select" to="/profesores"><li>Profesores</li></NavLink>
                <NavLink activeClassName="side__bar--select" to="/alumnos"><li>Alumnos</li></NavLink> 
                <NavLink activeClassName="side__bar--select" to="/papelera"><li>Papelera</li></NavLink>
            </ol>
    </section>
  );
}

export default SideBar;