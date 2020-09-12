import React from "react";
import Sidebar from "../components/Utils/Sidebar";
import Navbar from "../components/Utils/Navbar";
import TableTrash from "../components/Utils/Tables/TableTrash";

const Trash = (props) => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Navbar />

        <div className="row d-flex section_title align-items-center mt-2">
          <div className="col-md-3">
            <h1>Papelera</h1>
          </div>
        </div>

        <div className="col-md-12 d-flex mt-5">
          <div className="row filters">
            <p>Todos</p>
            <p>Tipo</p>
          </div>
        </div>

        <TableTrash />
      </div>
    </div>
  );
};

export default Trash;
