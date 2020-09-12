import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Utils/Sidebar";
import Button from "../components/Utils/Button";
import Navbar from "../components/Utils/Navbar";
import TableTeachers from "../components/Utils/Tables/TableTeachers";

const Teachers = (props) => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Navbar />

        <div className="row d-flex section_title align-items-center mt-2">
          <div className="col-md-3">
            <h1>Profesores</h1>
          </div>
          <div className="col-md-3">
            <Link to="/addTeachers">
              <Button
                text={"Añadir nuevo"}
                position={"btn__primary--course__admin"}
              />
            </Link>
          </div>
        </div>

        <div className="col-md-12 d-flex mt-5">
          <div className="row filters">
            <p>Todos</p>
            <p>Categorias</p>
          </div>
        </div>

        <TableTeachers />

      </div>
    </div>
  );
};

export default Teachers;
