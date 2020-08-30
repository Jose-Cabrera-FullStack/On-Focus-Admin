import React from 'react';
import Icon from '../../assets/static/images/svg/icon-search.svg';
import '../../assets/styles/components/Utils.scss';
import { logoutSession } from '../../actions/sessionActions'
import { getCookie } from "../../actions/sessionActions";

const Search = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const token = getCookie("token")
    logoutSession(token)
  };
  
  return (
    <div className="course__admin__session">
    <p id="logoutSession"><a href="#" onClick={handleSubmit}>Cerrar sesión</a></p>
    <div className="flex">
        <input className={"course__admin__input"+ " " + props.onlySession} type="text" placeholder="Buscar"/>
        <img className={"course__admin__input__img" + " " + props.onlySession} src={Icon} alt="Ícono de Papelera"/>
    </div>
</div>
)
}
export default Search;