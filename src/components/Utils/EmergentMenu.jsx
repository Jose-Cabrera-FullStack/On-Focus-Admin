import React from 'react';

import '../../assets/styles/components/ShoppingCar.scss';

import ArrowLeft from '../../assets/static/images/svg/arrow-visualization-black.svg'


const EmergentMenu = () => (
    <div class="hero__view__promo">
    <div class="flex"> 
        <img class="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
        <div>
            <h3 class="hero__view__promo__title">Aprende a ser mejor lider.</h3>
            <div class="flex">
                <h2 class="hero__view__promo__price">AR$ 490</h2>
                <p class="hero__view__promo__price__before">AR$ 699</p>
                <p class="hero__view__promo__price__delete">Eliminar</p>
            </div>
        </div>
    </div>
    <div class="flex hero__view__promo__margin"> 
        <img class="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
        <div>
            <h3 class="hero__view__promo__title">Aprende a ser mejor lider.</h3>
            <div class="flex">
                <h2 class="hero__view__promo__price">AR$ 490</h2>
                <p class="hero__view__promo__price__before">AR$ 699</p>
                <p class="hero__view__promo__price__delete">Eliminar</p>
            </div>
        </div>
    </div>
    <div class="hero__view__promo__total">
        <div class="flex">
            <h2>Tu total es de:</h2>
            <h2 class="hero__view__promo__total__ar">AR$ 980</h2>
        </div>
    </div>
    <div>
        <button class="btn__secundary btn__secundary--promo">Comprar</button>
        <button class="btn__primary btn__primary--promo">Ir al carrito</button>
    </div>
</div>
)
export default EmergentMenu;