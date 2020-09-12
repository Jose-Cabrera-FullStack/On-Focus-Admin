import React, { useState } from "react";
import Sidebar from "../components/Utils/Sidebar";
import Navbar from "../components/Utils/Navbar";
import TableCategories from "../components/Utils/Tables/TableCategories";
import CollapseAddCategory from "../components/Utils/Tables/actionsTable/collapseAddCategory";
import Button from "react-bootstrap/Button";

const Categories = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Navbar />

        <div className="row d-flex section_title align-items-center mt-2">
          <div className="col-md-2">
            <h1>Categorías</h1>
          </div>
          <div className="col-md-3 addButton">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="collapse-text"
              aria-expanded={open}
            >
              Añadir nuevo
            </Button>
          </div>
        </div>

        <CollapseAddCategory open={open}/>

        <div className="col-md-12 d-flex">
          <div className="row filters">
            <p>Todos</p>
            <p>Categorias</p>
          </div>
        </div>

        <TableCategories />
      </div>
    </div>
  );
};

export default Categories;
