import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Utils/Sidebar";
import Navbar from "../components/Utils/Navbar";
import TableCourses from "../components/Utils/Tables/TableCourses";
import Button from "../components/Utils/Button";

const Course = (props) => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Navbar />

        <div className="row d-flex section_title align-items-center mt-2">
          <div className="col-md-3">
            <h1>Listado de Cursos</h1>
          </div>
          <div className="col-md-3">
            <Link to="/addCourses">
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

        <TableCourses />
      </div>
    </div>
  );
};

export default Course;
