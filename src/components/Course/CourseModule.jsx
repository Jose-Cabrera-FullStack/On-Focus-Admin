import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import ArrowUp from '../../assets/static/images/svg/arrow-up-black.svg';
import Reloj from '../../assets/static/images/svg/reloj.svg';


const CourseModule = () => (
    <section class="course__module">
        <h2>Modulo del curso</h2>
        <div >
            <ul>
                <li>
                    <strong>Módulo 1 - Lorem ipsum dolor sit </strong>
                    <img class="course__module__arrow" src={ArrowUp} alt="Flecha hacia abajo"/>
                    <div class="flex course__module__time">
                        <img class="course__module__reloj" src={Reloj} alt="reloj"/><p>03:15</p>
                    </div>
                </li>
                <li>
                    <strong>Módulo 2 - Lorem ipsum dolor sit </strong>
                    <img class="course__module__arrow" src={ArrowUp} alt="Flecha hacia abajo"/>
                    <div class="flex course__module__time">
                        <img class="course__module__reloj" src={Reloj} alt="reloj"/><p>03:15</p>
                    </div>
                </li>
                <li>
                    <strong>Módulo 3 - Lorem ipsum dolor sit </strong>
                    <img class="course__module__arrow" src={ArrowUp} alt="Flecha hacia abajo"/>
                    <div class="flex course__module__time">
                        <img class="course__module__reloj" src={Reloj} alt="reloj"/><p>03:15</p>
                    </div>
                </li>
                <li>
                    <strong>Módulo 4 - Lorem ipsum dolor sit </strong>
                    <img class="course__module__arrow" src={ArrowUp} alt="Flecha hacia abajo"/>
                    <div class="flex course__module__time">
                        <img class="course__module__reloj" src={Reloj} alt="reloj"/><p>03:15</p>
                    </div>
                </li>
                <li>
                    <strong>Módulo 5 - Lorem ipsum dolor sit </strong>
                    <img class="course__module__arrow" src={ArrowUp} alt="Flecha hacia abajo"/>
                    <div class="flex course__module__time">
                        <img class="course__module__reloj" src={Reloj} alt="reloj"/><p>03:15</p>
                    </div>
                </li>
                <li>
                    <strong>Módulo 6 - Lorem ipsum dolor sit </strong>
                    <img class="course__module__arrow" src={ArrowUp} alt="Flecha hacia abajo"/>
                    <div class="flex course__module__time">
                        <img class="course__module__reloj" src={Reloj} alt="reloj"/><p>03:15</p>
                    </div>
                </li>

            </ul>
        </div>
        </section>
)
export default CourseModule;