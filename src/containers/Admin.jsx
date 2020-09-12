import React, { useState } from "react";
import Button from "../components/Utils/Button";
import Logo from "../assets/static/images/img/admin-logo.png";
import sessionActions from "../actions/sessionActions";
import LoadingOverlay from "react-loading-overlay";
import GeneralModal from "../components/Utils/Modals/GeneralModal";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [modalShow, setModalShow] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(false);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpinnerShow(true);

    const redirectUrl = "/courses";

    Promise.resolve(sessionActions.loginUser(username, password))
      .then((result) => {
        setSpinnerShow(false);
        result ? (window.location.href = redirectUrl) : setModalShow(true);
      })
      .catch((err) => {
        setModalShow(true);
      });
  };

  return (
    <div className="container-fluid col-md-12 admin">
      <LoadingOverlay active={spinnerShow} spinner></LoadingOverlay>
      <div className="row h-100 d-flex align-items-center justify-content-center">
        <div className="col-md-3 adminLogo">
          <img src={Logo} alt="Focus Mind Logo" />
        </div>
        <div className="col-md-4">
          <div className="row col-md-12 h-100 d-flex align-items-center justify-content-between">
            <button className="administratorButton">Soy administrador</button>
            <button className="teacherButton">Soy profesor</button>
          </div>
          <div className="loginBox container-fluid ">
            <form onSubmit={handleSubmit} id="loginForm">
              <div className="row insidePadding">
                <div className="row col-md-10">
                  <h5>Login</h5>
                </div>
                <div className="row col-md-10 mb-4">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Usuario"
                    value={username}
                    onChange={handleChangeUsername}
                  />
                </div>
                <div className="row col-md-10 mb-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChangePassword}
                  />
                </div>
                <div className="row col-md-10 align-items-center">
                  <input type="checkbox" name="rememberme" id="rememberme" />
                  <label form="rememberme">Recordame</label>
                </div>
                <Button />
              </div>
            </form>
          </div>
          <GeneralModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            centered={true}
            title="Acceso Denegado"
            message="Verifique su usuario o constraseña"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
