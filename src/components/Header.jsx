import React from 'react';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import { logoutRequest } from '../actions';
import Logo from '../assets/static/images/svg/logo-small.svg'
import Shopping from '../assets/static/images/svg/shopping-car.svg'


import '../assets/styles/components/Header.scss';

const Header = props => {
  
  // const { user= {} } = props;
  // const hasUser = Object.keys(user).length  >  0;

  // const handleLogout = () => {
  //   props.logoutRequest({});
  // };

  return(
  
    <header>
      <nav class="navbar">
        <Link to="/">
          <figure class="grid-1">
            <img class="navbar__img" src={Logo} alt="" />
          </figure>
        </Link>
        <div class="grid-2 navbar__justify__self">
          <ol class="navbar__element__list">
            <Link to="/cursos" className="text-decoration">
              <li class="navbar__menu">Descubrir cursos</li>
            </Link>
            <Link to="/sobre-nosotros" className="text-decoration">
              <li class="navbar__menu">About On Focus</li>
            </Link>
            <li class="navbar__menu navbar__menu--fix">
              <Link to="/carrito">
              <img
                src={Shopping}
                class="navbar__menu__shopping__cart"
                alt="Carrito de compras"
                />
                </Link>
            </li>
            <li class="navbar__menu ">
              <button
                class="btn__primary btn__primary--login btn__primary--login"
              >
                Iniciar Sesion
              </button>
            </li>
            <li class="navbar__menu">
              <Link to="/registrarse">
              <button class="btn__primary btn__primary--login">
                Registrarse
              </button>
              </Link>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// const mapDispatchToProps = {
//   logoutRequest,
// };


// export default connect(mapStateToProps,mapDispatchToProps)(Header);
