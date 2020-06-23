import React from 'react';
import {connect} from 'react-redux';

import Logo from '../../assets/static/images/svg/logo-small.svg';


import '../../assets/styles/components/SideBar.scss';

const SideBar = () => {
  return(
    <section className="side__bar">
            <img className="side__bar__img" src={Logo} alt="Logo de Focus Minds"/>
            <ol>
                <li><p>Curso</p> </li>
                <li><p>Categorías</p> </li>
                <li><p>Profesores</p> </li>
                <li><p>Alumnos</p> </li>
                <li><p>Papelera</p> </li>
            </ol>
    </section>
  );
}

export default connect(null,null)(SideBar);