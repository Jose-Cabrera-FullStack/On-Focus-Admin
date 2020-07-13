import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Teacher.scss';

import Button from '../Utils/Button'

import Photo from '../../assets/static/images/img/photo-put.png'
import Arrow from '../../assets/static/images/svg/arrow-down-black.svg'
import Instagram from '../../assets/static/images/svg/instagram-black.svg'
import Twitter from '../../assets/static/images/svg/twitter-black.svg'
import Facebook from '../../assets/static/images/svg/facebook-black.svg'
import LinkedIn from '../../assets/static/images/svg/linkedin-black.svg'
import Youtube from '../../assets/static/images/svg/youtube-black.svg'

const DataBox = () => (
    <section class="teacher__box ">
      <div className="teacher__box__inside flex">
        <div className="teacher__box__inside__left">
            <h3>Datos Personales</h3>
            <div className="flex">
                <img src={Photo} alt="Colocar tu foto"/>
                <div className="teacher__box__inside__left__photo">
                    <p className="teacher__box__inside__left__profile">Foto de perfil</p>
                    <i className="teacher__box__inside__left__recommended">Tamaño recomendado <br/>
                    300x300 px</i>
                </div>
            </div>
            <div>
                <h5>Nombre Completo</h5>
                <input type="text"/>
            </div>
            <div>
                <h5>Titulos / Estudios</h5>
                <input type="text"/>
            </div>
            <div>
                <h5>Descripción</h5>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <h3>Seleccionar cursos</h3>
                <div className="flex">
                <input type="text" placeholder="Escribe el nombre del curso"/>
                <img className="teacher__box__inside__left__arrow" src={Arrow} alt="Flecha hacia abajo"/>
                </div>
            </div>
            
        </div>
        <div className="teacher__box__inside__right">
            <h3>Redes sociales</h3>
            <div className="teacher__box__inside__right__inside">
                <div className="flex">
                    <img src={Instagram} alt="Instagram"/>
                    <h5>Instagram</h5>
                </div>
                <input type="text"/>
            </div>
            <div className="teacher__box__inside__right__inside">
                <div className="flex">
                    <img src={Twitter} alt="Twitter"/>
                    <h5>Twitter</h5>
                </div>
                <input type="text"/>
            </div>
            <div className="teacher__box__inside__right__inside">
                <div className="flex">
                    <img src={Facebook} alt="Facebook"/>
                    <h5>Facebook</h5>
                </div>
                <input type="text"/>
            </div>
            <div className="teacher__box__inside__right__inside">
                <div className="flex">
                    <img src={LinkedIn} alt="LinkedIn"/>
                    <h5>LinkedIn</h5>
                </div>
                <input type="text"/>
            </div>
            <div className="teacher__box__inside__right__inside">
                <div className="flex">
                    <img src={Youtube} alt="YouTube"/>
                    <h5>YouTube</h5>
                </div>
                <input type="text"/>
            </div>
            <Button text={"Guardar perfil"} position={"btn__primary--teacher"}/>
        </div>
      </div>
    </section>
)
export default DataBox;