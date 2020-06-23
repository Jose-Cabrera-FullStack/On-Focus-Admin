import React from 'react';
import {Link} from 'react-router-dom';

import '../assets/styles/components/Footer.scss';

import Logo from '../assets/static/images/svg/logo.svg'
import Message from '../assets/static/images/svg/message.svg'
import Arrow from '../assets/static/images/svg/arrow-up.svg'

const Footer = () => {
  var mybutton = document.getElementById("footer__arrow");
      
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return(
    <>
<footer class="footer">
      <div class="footer__container">
        <div>
          <ol class="footer__container__left">
            <h5>Accesos</h5>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/sobre-nosotros">
              <li>About On Focus</li>
            </Link>
            <Link to="/cursos">
              <li>Cursos</li>
            </Link>
            <Link to="/contactanos">
              <li>Contacto</li>
            </Link>
            <Link to="/enseña">
              <li>Quiero dar un curso</li>
            </Link>
          </ol>
          <div className="footer__socials__network">
            <ol class="footer__container__left--fix">
              <li>
              <span className="footer__socials--youtube" alt="Youtube"></span>
              </li>
              <li>
              <span className="footer__socials--facebook" alt="Facebook"></span>
              </li>
              <li>
              <span className="footer__socials--instagram" alt="Instagram"></span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <figure>
            <img
              class="footer__logo"
              src={Logo}
              alt="on focus"
            />
          </figure>
        </div>

        <div class="footer__container__right">
          <div class="flex">
            <div>
              <ol>
                <h5>Legales</h5>
                <Link to="/politicas">
                  <li>Politicas de Cookie</li>
                </Link>
                <Link to="/politicas">
                  <li>Centro de Ayuda</li>
                </Link>
                <Link to="/politicas">
                <li to="terminos-y-condiciones">
                  Términos y <br />
                  condiciones
                </li>
                </Link>
              </ol>
              <div class="footer__help">
                <img src={Message} alt="Mensaje" />
                <p>ayuda@onfocus.com</p>
              </div>
            </div>
            <img
            onclick={topFunction()}
            id="footer__arrow"
            class="footer__arrow"
            src={Arrow}
            alt="Flecha hacia arriba"
            />
          </div>
        </div>
      </div>
    </footer>
    <div class="footer__reserved">
      <p>All Rights Reserved 2019.</p>
    </div>
    </>
)};

export default Footer;