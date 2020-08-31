import React, { useState } from "react";

import ButtonOriginal from "../components/Utils/ButtonOriginal";

import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "../components/Utils/SideBar";
import Search from "../components/Utils/Search";
import Table from "../components/Utils/Tables/TableCategories";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import apiCategories from "../api/apiCategories";
import "../assets/styles/components/CourseAdmin.scss";

const Categories = (props) => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trueValue = true;
    const publishedValue = "published";
    
    const payload = { name, trueValue, publishedValue};

    console.log(payload);

    apiCategories
      .insertCategory(payload)
      .then((res) => {
        window.alert(`Categoria creada exitosamente`);
        window.location.href = "/categorias";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App flex">
      <SideBar />
      <div>
        <div className="course__admin flex">
          <h1>Categorías</h1>
          <Button
            className={"btn__primary--course__admin"}
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open}
          >
            Añadir nuevo
          </Button>

          <Search />
        </div>
        <div className="category_collapse flex">
          <Collapse in={open}>
            <div id="collapse-text" className="category_collapse_area">
              <form id="createTCategory" onSubmit={handleSubmit}>
                <div>
                  <h5>Nueva categoría</h5>

                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                  />

                  <ButtonOriginal
                    text={"Agregar categoria"}
                    position={"btn__primary--course__admin"}
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </Collapse>
        </div>
        <div className="course__admin__categories flex">
          <p>Todos</p>
          <p>Categorias</p>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Categories;
