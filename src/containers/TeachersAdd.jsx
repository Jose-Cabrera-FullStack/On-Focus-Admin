import React from "react";

import Sidebar from "../components/Utils/Sidebar";
import AddTeacherForm from "../components/Utils/Forms/addTeacherForm";
import Navbar from "../components/Utils/Navbar";

const TeachersAdd = (props) => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Navbar />

        <div className="row d-flex section_title align-items-center mt-2">
          <div className="col-md-3">
            <h1>Profesores</h1>
          </div>
        </div>

        <AddTeacherForm />
      </div>
    </div>
  );
};

export default TeachersAdd;
