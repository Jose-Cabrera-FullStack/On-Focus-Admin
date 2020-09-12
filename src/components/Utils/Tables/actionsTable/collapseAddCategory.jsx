import React, { useState } from "react";
import GeneralModal from "../../Modals/GeneralModal";
import ButtonOriginal from "../../ButtonOriginal";
import Collapse from "react-bootstrap/Collapse";
import apiCategories from "../../../../api/apiCategories";

const CollapseAddCategory = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trueValue = true;
    const publishedValue = "published";

    const payload = { name, trueValue, publishedValue };

    apiCategories
      .insertCategory(payload)
      .then((res) => {
        setModalShow(true);
        window.location.href = "/categories";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="category_collapse d-flex">
      <Collapse in={props.open}>
        <div id="collapse-text" className="category_collapse_area col-md-8">
          <form id="createCategory" className="m-4" onSubmit={handleSubmit}>
            <div className="row">
              <h5>Nueva categoría</h5>
            </div>

            <div className="row">
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

            <div className="row">
              <h5>Seleccionar cursos</h5>
            </div>

            <div className="row">
              <input type="text" name="courseSelect" />
            </div>
          </form>
          <GeneralModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            centered={true}
            title="Categoría Creada"
            message="Ha sido creado una nueva categoría"
          />
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseAddCategory;
