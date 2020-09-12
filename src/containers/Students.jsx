import React from "react";
import Sidebar from "../components/Utils/Sidebar";
import Navbar from "../components/Utils/Navbar";
import TableStudents from "../components/Utils/Tables/TableStudents";

const Students = (props) => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Navbar />

        <div className="row d-flex section_title align-items-center mt-2">
          <div className="col-md-3">
            <h1>Alumnos</h1>
          </div>
        </div>

        <div className="col-md-12 d-flex mt-5">
          <div className="row filters">
            <p>Todos</p>
            <p>Orden Alfabetico</p>
            <p>Fecha de Registro </p>
          </div>
        </div>

        <TableStudents />

      </div>
    </div>
  );
};

export default Students;
