import React, { useState, useEffect } from "react";
import Select from "react-select";
import apiCategories from "../../../api/apiCategories";
import apiTeachers from "../../../api/apiTeachers";
import "../../../assets/styles/components/forms.scss";
import GeneralModal from "../Modals/GeneralModal";
import Button from "../Button";

const AddCourseForm = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [data, SetData] = useState([]);
  const [dataTeachers, SetDataTeachers] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [video, setVideo] = useState();
  const [modules, setModules] = useState();
  const [duration, setDuration] = useState();
  const [descriptionCourse, setDescriptionCourse] = useState();

  // const handleChangePhoto = (e) => {
  //   setPhoto(e.target.value);
  // };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeVideo = (e) => {
    setVideo(e.target.value);
  };

  const handleInputModules = (e) => {
    setModules(e.target.value);
  };

  const handleInputDuration = (e) => {
    setDuration(e.target.value);
  };

  
  const handleInputDescriptionCourse = (e) => {
    setDescriptionCourse(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const payload = { photo, full_name, title, description, courses, socials };
    // console.log(payload);
    // apiTeachers
    //   .insertTeacher(payload)
    //   .then((res) => {
    //     setModalShow(true);
    //     window.location.href = "/teachers";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleInputChange = (newValue) => {
    // const inputValue = newValue;
    // let values = [];
    // Object.keys(inputValue).map((index) => {
    //   let obPush = inputValue[index].value;
    //   return values.push(obPush);
    // });
    // setCourses(values);
  };

  const handleInputChangeTeacher = (newValue) => {
    // const inputValue = newValue;
    // let values = [];
    // Object.keys(inputValue).map((index) => {
    //   let obPush = inputValue[index].value;
    //   return values.push(obPush);
    // });
    // setCourses(values);
  };

  useEffect(() => {
    apiCategories
      .getAllCategories()
      .then((res) => {
        SetData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const categoriesOptions = [];

  Object.keys(data).map((index) => {
    let obPush = { value: data[index]._id, label: data[index].name };
    return categoriesOptions.push(obPush);
  });

  useEffect(() => {
    apiTeachers
      .getAllTeachers()
      .then((res) => {
        SetDataTeachers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const teachersOptions = [];

  Object.keys(dataTeachers).map((index) => {
    let obPush = {
      value: dataTeachers[index]._id,
      label: dataTeachers[index].full_name,
    };
    return teachersOptions.push(obPush);
  });

  return (
    <form id="createCourse" onSubmit={handleSubmit} className="addForms">
      <div className="row">
        <div className="col-md-8">

          <div className="insideTableSection p-5">
            <fieldset>
              <div className="mb-4">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description">Descripción</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleChangeDescription}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="video_intro">Video Introductorio</label>
                <input
                  type="text"
                  name="video_intro"
                  value={video}
                  onChange={handleChangeVideo}
                />
              </div>
            </fieldset>
          </div>

          <div className="insideTableSection p-5 mt-3">
            <fieldset>
              <div className="mb-2">
                <h4>Sobre este curso</h4>
                <label htmlFor="description_about_this_course">Descripción</label>
                <textarea
                  name="description_about_this_course"
                  value={descriptionCourse}
                  onChange={handleInputDescriptionCourse}
                />
              </div>
            </fieldset>
          </div>

          <div className="insideTableSection p-5 mt-3">
          <fieldset>
              <div className="mb-2">
                <h4>Que incluye este curso</h4>
                <label htmlFor="courses_includes">Item 1</label>
               
              </div>
            </fieldset>
          </div>

          <div className="insideTableSection p-5 mt-3">
          <fieldset>
              <div className="mb-2">
                <h4>¿Este curso es para mí?</h4>
                <label htmlFor="courses_target">Item 1</label>
               
              </div>
            </fieldset>
          </div>

          <div className="insideTableSection p-5 mt-3">
          <fieldset>
              <div className="mb-2">
                <h2>Crear modulos</h2>
               
              </div>
            </fieldset>
          </div>

          <div className="insideTableSection p-5 mt-3">
          <fieldset>
              <div className="mb-2">
                <h2>Recomendaciones</h2>
               
              </div>
            </fieldset>
          </div>

          <div className="insideTableSection p-5 mt-3">
          <fieldset>
              <div className="mb-2">
                <h2>Precio</h2>
               
              </div>
            </fieldset>
          </div>

          <div className="row rowSeparator">
              <Button
                text={"Publicar curso"}
                position={"btn__primary--teacher"}
                type="submit"
              />
            </div>
        </div>

        <div className="col-md-4">
          <div className="insideTableSection p-3">
            <label htmlFor="category">Selecciona una categoría</label>
            <Select
              name="courses"
              placeholder="Agregue cursos"
              options={categoriesOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleInputChange}
            />
          </div>

          <div className="insideTableSection p-3 mt-3">
            <label htmlFor="featured_image">Imágen destacada</label>
            <label htmlFor="load_featured_image">
              +Cargar Imágen / Cambiar imágen
            </label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              placeat quod, vero non vitae at rerum, temporibus impedit
              obcaecati modi unde eius, dolorem tempora. Voluptatem dolorum ipsa
              corrupti atque reiciendis.
            </p>
          </div>

          <div className="insideTableSection p-3 mt-3">
            <label htmlFor="modules">Cantidad de modulos</label>
            <input
              type="text"
              name="modules"
              value={modules}
              onChange={handleInputModules}
            />
          </div>

          <div className="insideTableSection p-3 mt-3">
            <label htmlFor="duration">Duración del curso</label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={handleInputDuration}
            />
          </div>

          <div className="insideTableSection p-3 mt-3">
            <label htmlFor="category">Seleccionar profesor</label>
            <Select
              name="courses"
              placeholder="Agregue cursos"
              options={teachersOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleInputChangeTeacher}
            />
          </div>
        </div>
      </div>
      <GeneralModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered={true}
        title="Profesor Creado"
        message="Ha sido creado un profesor exitosamente"
      />
    </form>
  );
};
export default AddCourseForm;
