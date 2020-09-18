import React, { useState, useEffect } from "react";
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

  const [teacher, setTeacher] = useState(false);
  const [admin, setAdmin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      const userInput = document.getElementById("username");
      userInput.value = localStorage.getItem("user");
      setUsername(userInput.value);
    }
  });

  const toogleAdmin = () => {
    setAdmin(!admin);
    setTeacher(!teacher)
  };
  
  const toogleTeacher = () => {
    setTeacher(!teacher);
    setAdmin(!admin)

  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMe = (event) => {
    let username = document.getElementById("username");

    if (event.target.checked) {
      localStorage.setItem("user", username.value);
    } else {
      localStorage.setItem("user", "");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpinnerShow(true);

    const redirectUrl = "/courses";

    let userType;
    admin ? userType = 0 : userType = 1;

    Promise.resolve(sessionActions.loginUser(username, password, userType))
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
            <button className={admin ? 'administratorButton activeButton': 'administratorButton inactiveButton'} onClick={toogleAdmin}>
              Soy administrador
            </button>
            <button className={teacher ? 'teacherButton activeButton': 'teacherButton inactiveButton'}  onClick={toogleTeacher}>
              Soy profesor
            </button>
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
                    onSubmit={handleChangeUsername}
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
                <div className="row col-md-10 align-items-center mt-1 mb-3">
                  <label form="rememberme">
                    <input
                      type="checkbox"
                      name="rememberme"
                      id="rememberme"
                      className="mr-2"
                      onClick={handleRememberMe}
                    />
                    Recordame
                  </label>
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
            message="Verifique su usuario o contraseña"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
