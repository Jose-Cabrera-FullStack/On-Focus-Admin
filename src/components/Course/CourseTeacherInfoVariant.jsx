import React from 'react';



import '../../assets/styles/components/Course.scss';
import Teacher from '../../assets/static/images/img/profile-teach.png';
import Facebook from '../../assets/static/images/svg/facebook-black.svg';
import Linkedin from '../../assets/static/images/svg/linkedin-black.svg';
import Twitter from '../../assets/static/images/svg/twitter-black.svg';
import Youtube from '../../assets/static/images/svg/youtube-black.svg';



const CourseTeacher = () => (
    <div className="buyed__teacher">
        <div class="flex">
            <img className="buyed__teacher__photo" src={Teacher} alt="Foto del profesor"/>
            <div className="buyed__teacher__inside">
                <h3 >Juan Pablo Laco</h3>
                <p>Lic. Lorem ipsum - Lorem ipsum</p>
                <div class="flex">
                    <strong>Seguir:</strong>
                    <div class="flex course__teach__socials ">
                    <img src={Linkedin} alt="Instagram"/>
                    <img src={Facebook} alt="Twitter"/>
                    <img src={Twitter} alt="Facebook"/>
                    <img src={Youtube} alt="LinkedIn"/>
                    <img src={Facebook} alt="Youtube"/>
                    </div>

                </div>
                <h5 className="buyed__teacher__info">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit esse molestie consequat.</h5>
            </div>
        </div>
    </div>
)
export default CourseTeacher;
