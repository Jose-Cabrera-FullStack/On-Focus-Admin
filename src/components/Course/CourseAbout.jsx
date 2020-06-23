import React from 'react';

import '../../assets/styles/components/CoursePlus.scss';
import Course from '../../assets/static/images/img/about-this-course.png';


const CourseAbout = (props) => {
    
    return(
        <div class="course__about">
            <h1 className={props.font}>{props.title ? props.title:'Sobre este curso'}</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit esse molestie consequat.</p>
            <img src={Course} alt="Imagen sobre el curso"/>
            {props.font ? 
            
            <div className="buyed__course__variant__text">
                <h4>¿Este curso es para mi?</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </li>
                    <li> Ut wisi enim ad minim veniam... </li>
                </ul>
            </div>
            :
            
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
            }
        </div>
)}
export default CourseAbout;
    