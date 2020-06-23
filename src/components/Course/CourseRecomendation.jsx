import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import Perfil from '../../assets/static/images/img/perfil-recomendation.png';
import ArrowLeft from '../../assets/static/images/svg/arrow-left.svg';
import ArrowRight from '../../assets/static/images/svg/arrow-right.svg';


const CourseRecomendation = () => (
    <section class="course__recomendation">
        <div class="course__recomendation__inside">
            <h5 class="course__recomendation__inside__title">Recomendaciones</h5>
            <div class="course__recomendation__inside__box">
                <div>
                    <div class="flex">
                        <img class="course__recomendation__inside__profile" src={Perfil} alt="Perfil"/><h4 class="course__recomendation__inside__name">Fernando Lorem Ipsum</h4>
                    </div>
                    <p class="course__recomendation__inside__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                    </p>
                </div>
                <div>
                    <div class="flex">
                        <img class="course__recomendation__inside__profile" src={Perfil} alt="Perfil"/><h4 class="course__recomendation__inside__name">Fernando Lorem Ipsum</h4>
                    </div>
                    <p class="course__recomendation__inside__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                    </p>
                </div>
                <div>
                    <div class="flex">
                        <img class="course__recomendation__inside__profile" src={Perfil} alt="Perfil"/><h4 class="course__recomendation__inside__name">Fernando Lorem Ipsum</h4>
                    </div>
                    <p class="course__recomendation__inside__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                    </p>
                </div>
        </div>
    </div>
            <div class="flex course__recomendation__arrows">
                <img src={ArrowLeft} alt="Flecha a la derecha"/>
                <p className="course__recomendation__arrows__numb">3/12</p>
                <img src={ArrowRight} alt="Flecha a la izquierda"/>
            </div>
    </section>
)
export default CourseRecomendation;
