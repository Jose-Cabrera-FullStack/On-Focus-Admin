import React, { useState } from "react";
import Button from "../components/Utils/Button";
import Logo from "../assets/static/images/img/admin-logo.png";
import "../assets/styles/components/Register.scss";
import "../assets/styles/components/Admin.scss";
import { ipAddress, loginUser } from "../actions/sessionActions";

const Login = (props) => {
  const EMAIL_REGEX = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ip = ipAddress;
    const redirectUrl = "/profesores";

    loginUser(username, password, ip, redirectUrl)
  };

  return (
    <section className="admin">
      <div className="admin__inside flex">
        <img className="admin__login__img" src={Logo} alt="" />
        <div className="admin__login__login">
          <div className="admin__inside__option flex">
            <div className="admin__inside__option__left">
              <p>Soy Administrador</p>
            </div>
            <div className="admin__inside__option__right">
              <p>Soy Profesor</p>
            </div>
          </div>
          <form className="admin__form" onSubmit={handleSubmit} id="loginForm">
            <div className="admin__form__inside">
              <h5>Login</h5>
              <input
                className="admin__form__inside__input"
                type="text"
                name="username"
                id="username"
                placeholder="Usuario"
                value={username}
                onChange={handleChangeUsername}
              />
              <input
                className="admin__form__inside__input"
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleChangePassword}
              />
              <br />
              <div className="flex">
                <input
                  className="admin__form__inside__ckeckout"
                  type="checkbox"
                  name="rememberme"
                  id="rememberme"
                />
                <p className="admin__form__inside__ckeckout__text">Recordame</p>
              </div>
              <Button />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
