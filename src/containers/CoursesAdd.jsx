import React from "react";

import Sidebar from "../components/Utils/Sidebar";
import AddCourseForm from "../components/Utils/Forms/addCourseForm";
import Navbar from "../components/Utils/Navbar";

const CoursesAdd = (props) => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Navbar />

        <div className="row d-flex section_title align-items-center mt-5 mb-4">
          <div className="col-md-8">
            <h1>Agregar nuevo curso</h1>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <p className="mr-2">Salir y cancelar</p>
            <p>Guardar Cambios</p>
          </div>
        </div>

        <AddCourseForm />
      </div>
    </div>
  );
};

export default CoursesAdd;
