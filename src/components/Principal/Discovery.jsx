import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import '../../assets/styles/components/Courses.scss';
import Shopping from '../Utils/ShoppingCarSquare';

import Promo from '../../assets/static/images/svg/rectangle-promo.svg'
import Class1 from '../../assets/static/images/img/ui-design.png'
import Class2 from '../../assets/static/images/img/ui-design-1.png'
import Class3 from '../../assets/static/images/img/ui-design-2.png'
import Class4 from '../../assets/static/images/img/ui-design-3.png'
import User from '../../assets/static/images/svg/user.svg'
import Arrow from '../../assets/static/images/svg/arrow-right.svg'
import Star from '../../assets/static/images/svg/star.svg'
import Diploma from '../../assets/static/images/img/diploma.png'


const Discovery = (props) => {
  return(
    <section class="discovery">
      <div class="discovery__container">
        <h2 class="discovery__title">
          {props.info ? props.info : 'Descubre la plataforma lider en negocios y emprendimiento.'}
        </h2>

        <div class=" flex">
          <div class={"discovery__course" + " " + props.column}>
            <div class="discovery__box">
              <div class="discovery__box__img">
                <div>
                  <img
                    class="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div class="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>

                <img
                  src={Class1}
                  class="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div class="discovery__box__info">
                <div class="discovery__box__info__padding">
                  <h2 class="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div class="flex">
                    <p class="discovery__box__info__name">Marketing</p>
                    <i class="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div class="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p class="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div class="flex">
                    <h2 class="discovery__box__info__price">AR$ 490</h2>
                    <i class="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      class="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div class="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                    <Shopping/>
                  </div>
                </div>
              </div>
            </div>
            <div class="discovery__box">
              <div class="discovery__box__img">
                <div>
                  <img
                    class="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div class="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>
                <img
                  src={Class2}
                  class="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div class="discovery__box__info">
                <div class="discovery__box__info__padding">
                  <h2 class="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div class="flex">
                    <p class="discovery__box__info__name">Marketing</p>
                    <i class="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div class="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p class="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div class="flex">
                    <h2 class="discovery__box__info__price">AR$ 490</h2>
                    <i class="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      class="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div class="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                <Shopping/>                  
                </div>
                </div>
              </div>
            </div>
            <br />
            <div class={"discovery__box" + " " + props.none}>
              <div class="discovery__box__img">
                <div>
                  <img
                    class="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div class="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>
                <img
                  src={Class3}
                  class="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div class="discovery__box__info">
                <div class="discovery__box__info__padding">
                  <h2 class="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div class="flex">
                    <p class="discovery__box__info__name">Marketing</p>
                    <i class="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div class="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p class="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div class="flex">
                    <h2 class="discovery__box__info__price">AR$ 490</h2>
                    <i class="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      class="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div class="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                  <Shopping/>                  
                </div>
                </div>
              </div>
            </div>

            <div class={"discovery__box" + " " + props.display}>
              <div class="discovery__box__img">
                <div>
                  <img
                    class="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div class="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>
                <img
                  src={Class4}
                  class="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div class="discovery__box__info">
                <div class="discovery__box__info__padding">
                  <h2 class="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div class="flex">
                    <p class="discovery__box__info__name">Marketing</p>
                    <i class="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div class="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p class="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div class="flex">
                    <h2 class="discovery__box__info__price">AR$ 490</h2>
                    <i class="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      class="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div class="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                <Shopping/>                  
                </div>
                </div>
              </div>
            </div>
            </div>

          <div class={"discovery__diploma"+ " " + props.display}>
            <img
              class="discovery__diploma__star"
              src={Star}
              alt="star"
            />
            <h2 class="discovery__diploma__title">Obten tu diploma.</h2>
            <p class="discovery__diploma__text">
              Al terminar un curso obtendrás un certificado digital que
              certifica el curso.
            </p>
            <img
              class="discovery__diploma__img"
              src={Diploma}
              alt="diploma"
            />
          </div>
          </div>
      </div>
    </section>
)}
export default Discovery;