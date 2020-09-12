import React, { useState, useEffect } from "react";
import Select from "react-select";
import apiTeachers from "../../../api/apiTeachers";
import apiCourses from "../../../api/apiCourses";
import "../../../assets/styles/components/forms.scss";
import GeneralModal from "../Modals/GeneralModal";
import Button from "../Button";
import Photo from "../../../assets/static/images/img/photo-put.png";
import Instagram from "../../../assets/static/images/svg/instagram-black.svg";
import Twitter from "../../../assets/static/images/svg/twitter-black.svg";
import Facebook from "../../../assets/static/images/svg/facebook-black.svg";
import LinkedIn from "../../../assets/static/images/svg/linkedin-black.svg";
import Youtube from "../../../assets/static/images/svg/youtube-black.svg";

const AddTeacherForm = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [data, SetData] = useState([]);

  useEffect(() => {
    apiCourses
      .getAllCourses()
      .then((res) => {
        SetData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const testOptions = [];

  Object.keys(data).map((index) => {
    let obPush = { value: data[index]._id, label: data[index].name };
    return testOptions.push(obPush);
  });

  const [photo] = useState("urlFake");
  const [full_name, setFullName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [courses, setCourses] = useState([]);
  const [socials, setSocials] = useState({
    instagram: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  });

  // const handleChangePhoto = (e) => {
  //   setPhoto(e.target.value);
  // };

  const handleChangeName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue;

    let values = [];
    Object.keys(inputValue).map((index) => {
      let obPush = inputValue[index].value;
      return values.push(obPush);
    });

    setCourses(values);
  };

  const handleChangeSocials = (e) => {
    const value = e.target.value;
    setSocials({
      ...socials,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = { photo, full_name, title, description, courses, socials };
    console.log(payload);
    apiTeachers
      .insertTeacher(payload)
      .then((res) => {
        setModalShow(true);
        window.location.href = "/teachers";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-md-12 mt-5">
      <form id="createTeacher" onSubmit={handleSubmit} className="addForms">
        <div className="row insideTableSection p-5">
          <div className="col-md-6">
            <div className="row mb-3">
              <h3 className="formTitle">Datos Personales</h3>
            </div>
            <div className="row rowSeparator">
              <div className="col-md-4">
                <img src={Photo} alt="Colocar tu foto" />
              </div>
              <div className="col-md-8">
                <p className="photoTitle">Foto de perfil</p>
                <p className="recomendedText">
                  Tamaño recomendado <br />
                  300x300 px
                </p>
              </div>
            </div>
            <div className="row rowSeparator">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                name="fullName"
                value={full_name}
                onChange={handleChangeName}
              />
            </div>
            <div className="row rowSeparator">
              <label htmlFor="title">Titulos / Estudios</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
              />
            </div>
            <div className="row">
              <label htmlFor="description">Descripción</label>
            </div>
            <div className="row">
              <textarea
                name="description"
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
            </div>
            <div className="row mt-4">
              <h3 className="formTitle">Seleccionar cursos</h3>
            </div>

            <Select
              isMulti
              name="courses"
              placeholder="Agregue cursos"
              options={testOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleInputChange}
            />
            {/* <div className="inner-addon right-addon">
                <img
                  src={Arrow}
                  className="glyphicon glyphicon-search"
                  alt="Escribe el nombre del curso"
                />
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Escribe el nombre del curso"
                />
              </div> */}
          </div>

          <div className="col-md-6">
            <div className="row mb-3">
              <h3 className="formTitle">Redes sociales</h3>
            </div>
            <div className="row">
              <label htmlFor="instagram">
                <img src={Instagram} alt="Instagram" className="socialLogo" />
                Instagram
              </label>
              <input
                type="text"
                name="instagram"
                value={socials.instagram}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="row rowSeparator">
              <label htmlFor="twitter">
                <img src={Twitter} alt="Twitter" className="socialLogo" />
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                value={socials.twitter}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="row rowSeparator">
              <label htmlFor="facebook">
                <img src={Facebook} alt="Facebook" className="socialLogo" />
                Facebook
              </label>
              <input
                type="text"
                name="facebook"
                value={socials.facebook}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="row rowSeparator">
              <label htmlFor="linkedin">
                <img src={LinkedIn} alt="LinkedIn" className="socialLogo" />
                LinkedIn
              </label>
              <input
                type="text"
                name="linkedin"
                value={socials.linkedin}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="row rowSeparator">
              <label htmlFor="youtube">
                <img src={Youtube} alt="YouTube" className="socialLogo" />
                YouTube
              </label>
              <input
                type="text"
                name="youtube"
                value={socials.youtube}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="row rowSeparator">
              <Button
                text={"Guardar perfil"}
                position={"btn__primary--teacher"}
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
      <GeneralModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered={true}
        title="Profesor Creado"
        message="Ha sido creado un profesor exitosamente"
      />
    </div>
  );
};
export default AddTeacherForm;
