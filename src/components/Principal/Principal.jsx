import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Principal.scss';

import Logo from '../../assets/static/images/svg/logo.svg'

const Principal = () => (
    <section class="home__view ">
      <figure class=" home__view__figure">
        <img class="home__view__img" src={Logo} alt="Logo de On Focus" />
      </figure>
      <div class="home__view__title">
        <h1 class="slide-in-bottom-3">En la misión de empoderar 100</h1>
        <h1 class="slide-in-bottom-4">millones de personas a través del</h1>
        <h1 class="slide-in-bottom-5">conocimiento.</h1>
      </div>
      <div class="home__view__subtitle">
        <h3 class="slide-in-bottom-6">
          Bienvenido a On Focus Education, la plataforma que viene
        </h3>
        <h3 class="slide-in-bottom-7">
          a cambiar la manera de aprender en linea
        </h3>
      </div>
      <button class="btn__primary btn__primary--fix">Descubrí más</button>
    </section>
)
export default Principal;