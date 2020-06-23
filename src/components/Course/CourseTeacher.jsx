import React from 'react';

import '../../assets/styles/components/Course.scss';
import CourseTeacherInfo from './CourseTeacherInfo'
import CourseSaveMoney from './CourseSaveMoney'

const CourseTeacher = () => (
    <section class="course">
            <h2 class="discovery__box__info__title course__section__title">
                Sobre el profesor.
              </h2> 
              <div class="flex">
                  <CourseTeacherInfo/>
                  <CourseSaveMoney/>                    
            </div>
        </section>
)
export default CourseTeacher;
