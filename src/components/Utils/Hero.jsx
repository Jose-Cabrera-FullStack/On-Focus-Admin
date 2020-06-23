import React from 'react';

import '../../assets/styles/components/Utils.scss';


const Hero = (props) => {
  return (
    <section class="utils__hero__contact">

      <h1 class="utils__hero__title">
        {props.title ? props.title:'Mis Cursos'}
      </h1>
      
    </section>
)}
export default Hero;