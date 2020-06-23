import React from 'react';



import '../../assets/styles/components/Course.scss';
import Human from '../../assets/static/images/img/human-diploma.png';
import Star from '../../assets/static/images/svg/star-black.svg';



const CourseCertificate = () => (
    <div className="course__certificate flex">
        <img className="course__certificate__img" src={Human} alt="Estudiante con su certificado"/>
        <div className="course__certificate__left">
            <img src={Star} alt=""/>
            <h2>Obtenés un certificado al terminar el curso.</h2>
            <p>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummymagna aliquam erat.</p>
        </div>
    </div>
)
export default CourseCertificate;
