import React from 'react';
import {Link} from 'react-router-dom';


import '../../assets/styles/components/AboutUs.scss';
import Perfil from '../../assets/static/images/img/perfil.png'
import Comillas from '../../assets/static/images/svg/comillas.svg'
import ArrowRight from '../../assets/static/images/svg/arrow-right-black.svg'
import ArrowLeft from '../../assets/static/images/svg/arrow-left-black.svg'

const AboutUs = () => (
    <section class="about__us">
    <h1 class="about__us__title">
      Ut wisi enim ad minim exerci tation ullamcorper.
    </h1>
    <div class="flex">
      <div class="about__us__box">
        <div class="about__us__box__inside">
          <img src={Perfil} alt="perfil" />
          <h2 class="about__us__box__inside__name">Fernando Lorem Ipsum</h2>
          <i class="about__us__box__inside__profesion">Emprendedor</i>
          <br />
          <br />
          <img src={Comillas} alt="comillas" />
          <p class="about__us__box__inside__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>
      </div>
      <div class="about__us__box">
        <div class="about__us__box__inside">
          <img src={Perfil} alt="perfil" />
          <h2 class="about__us__box__inside__name">Fernando Lorem Ipsum</h2>
          <i>Emprendedor</i>
          <br />
          <br />
          <img src={Comillas} alt="comillas" />
          <p class="about__us__box__inside__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>
      </div>
      <div class="about__us__box none">
        <div class="about__us__box__inside">
          <img src={Perfil} alt="perfil" />
          <h2 class="about__us__box__inside__name">Fernando Lorem Ipsum</h2>
          <i>Emprendedor</i>
          <br />
          <br />
          <img src={Comillas} alt="comillas" />
          <p class="about__us__box__inside__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>
      </div>
      <div class="about__us__arrows none">
        <img
          class="about__us__arrow"
          src={ArrowRight}
          alt=""
        />
        <img
          class="about__us__arrow"
          src={ArrowLeft}
          alt=""
        />
      </div>
    </div>
  </section>
)
export default AboutUs;