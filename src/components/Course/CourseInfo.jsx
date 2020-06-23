import React from 'react';
import {Link} from 'react-router-dom';

import CourseInfoOnlyInfo from './CourseInfoOnlyInfo'
import CourseAbout from './CourseAbout'
import CourseSaveMoney from './CourseSaveMoney'

import '../../assets/styles/components/CoursePlus.scss';
import Video from '../../assets/static/images/img/video.png';

const CourseInfo = () => (
    <section class="course">
    <h2 class="discovery__box__info__title course__section">
        Aprendé a ser mejor lider.
      </h2> 
      <div class="course__section__name flex">
        <p class="discovery__box__info__name">Marketing</p>
        <i class="discovery__box__info__teach course__section__tech">- Por Juan Pablo Laco</i>
      </div>

      <div class="flex">
          <figure class="course__img">
              <img src={Video} alt="Video del Curso"/>
            </figure>
            <CourseSaveMoney/>      
        </div>
    <h1 className="course__info__title">Informacion</h1>
    <CourseInfoOnlyInfo/>   
    <CourseAbout/>   
    
</section>
)
export default CourseInfo;