import React from 'react';

import '../../assets/styles/components/Course.scss';
import ButtonArrowRight from '../Utils/ButtonArrowRight'
import Shopping from '../Utils/ShoppingCarSquare';


const CourseSaveMoney = () => (

        <div class="discovery__box__info discovery__box__info--course">
            <div class="discovery__box__info__inside">
                <h2 class="discovery__box__info__inside__title">Lorem ipsum dolor sit amet sed diam nonummy.</h2>
                <p class="discovery__box__info__inside__text">Lorem ipsum dolor sit amet, consectse diam nonummy nibh euismod tincidunt.</p>
                <div class="flex">
                    <h1 class="discovery__box__info__inside__price">AR$ 490</h1>
                    <h4 class="discovery__box__info__inside__save">Ahorrás AR$ 209</h4>
                </div>
                <div class="flex">
                    <p class="discovery__box__info__inside__before">ANTES <i>AR$ 699</i></p>
                    <p class="discovery__box__info__inside__percentage">- Dcto. 30%</p>
                </div>
                <div className="discovery__box__info__inside__buttons flex">
                <ButtonArrowRight/>
                <Shopping />
                </div> 
            </div>
        </div>
)
export default CourseSaveMoney;

