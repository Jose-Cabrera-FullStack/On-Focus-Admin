import React from 'react';

import '../../assets/styles/components/Utils.scss';

import Button from '../Utils/ButtonArrowRight'
import Course from '../../assets/static/images/img/ui-design.png'


const OtherCourse = (props) => {
  return (
    <section >
        <h1>Lorem ipsum dolor sit amet:</h1>
        <img src={Course} alt=""/>
        <h5>Aprendé a ser mejor lider.</h5>
        <i>Curso dictado por Juan Pablo Laco </i>
        <br/>
        <br/>
        <p className="podcast__information__text">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie <br/> consequat, vel illum dolo augue duis dolore te feugait nulla facilisi.</p>
        <Button/>
    </section>
)}
export default OtherCourse;