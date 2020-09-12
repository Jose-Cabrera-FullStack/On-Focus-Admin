import React from "react";
import IconSearch from "../../assets/static/images/svg/icon-search.svg";
import "../../assets/styles/components/navbar.scss";
import { logoutSession } from "../../actions/sessionActions";
import { getCookie } from "../../actions/sessionActions";

const Navbar = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const token = getCookie("token");
    logoutSession(token);
  };

  return (
    <nav className="navbarOptions navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button type="button" id="sidebarCollapse" className="btn btn-info">
          <i className="fas fa-align-left"></i>
          <span>Toggle Sidebar</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto columnUl">
            <li className="nav-item">
              <button onClick={handleSubmit} className="logout">
                Cerrar sesión
              </button>
            </li>
            <li className="nav-item">
              <div className="inner-addon right-addon">
                <img
                  src={IconSearch}
                  className="glyphicon glyphicon-search"
                  alt="Buscar"
                />
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Buscar"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
