import React from 'react';

import Icon from '../../assets/static/images/svg/icon-search.svg';
import '../../assets/styles/components/Utils.scss';


const Search = (props) => {
  return (
    <div className="course__admin__session">
    <p>Cerrar sesión</p>
    <div className="flex">
        <input className={"course__admin__input"+ " " + props.onlySession} type="text" placeholder="Buscar"/>
        <img className={"course__admin__input__img" + " " + props.onlySession} src={Icon} alt="Ícono de Papelera"/>
    </div>
</div>
)}
export default Search;