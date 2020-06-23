import React from 'react';



import '../../assets/styles/components/Course.scss';
import Teacher from '../../assets/static/images/img/profile-teach.png';
import Facebook from '../../assets/static/images/svg/facebook-black.svg';
import Linkedin from '../../assets/static/images/svg/linkedin-black.svg';
import Twitter from '../../assets/static/images/svg/twitter-black.svg';
import Youtube from '../../assets/static/images/svg/youtube-black.svg';



const CourseTeacher = () => (
    <div>
        <div class="flex">
            <img src={Teacher} alt="Foto del profesor"/>
            <div class="course__teach">
                <h3>Juan Pablo Laco</h3>
                <p>Lic. Lorem ipsum - Lorem ipsum</p>
                <div class="flex">
                    <strong>Seguir:</strong>
                    <div class="flex course__teach__socials">
                    <img src={Linkedin} alt="Instagram"/>
                    <img src={Facebook} alt="Twitter"/>
                    <img src={Twitter} alt="Facebook"/>
                    <img src={Youtube} alt="LinkedIn"/>
                    <img src={Facebook} alt="Youtube"/>
                    </div>

                </div>
            </div>
        </div>
        <p className="course__teach__info">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
    </div>
)
export default CourseTeacher;
