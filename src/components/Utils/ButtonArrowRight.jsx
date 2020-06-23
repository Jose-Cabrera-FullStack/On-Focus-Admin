import React from 'react';

import '../../assets/styles/components/Utils.scss';


const ButtonArrowRight = (props) => {
  return (
    <button class={"btn__secundary btn__secundary--buy discovery__box__position"+ " "+ props.background + " " + props.margin}>
        <div class="flex btn__arrow__buy">
        <span className={props.icon ? props.icon : "icon btn__arrow__buy__img"} alt="Ícono de flecha a la derecha"></span>
            <p>{props.text  ? props.text : 'Comprarlo ahora'}</p>
        </div>
    </button>
)}
export default ButtonArrowRight;