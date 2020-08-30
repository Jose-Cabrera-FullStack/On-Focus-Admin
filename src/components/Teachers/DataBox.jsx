import React, { useState, useEffect } from "react";
import apiTeachers from "../../api/apiTeachers";

import "../../assets/styles/components/Teacher.scss";

import Button from "../Utils/Button";
import Photo from "../../assets/static/images/img/photo-put.png";
import Arrow from "../../assets/static/images/svg/arrow-down-black.svg";
import Instagram from "../../assets/static/images/svg/instagram-black.svg";
import Twitter from "../../assets/static/images/svg/twitter-black.svg";
import Facebook from "../../assets/static/images/svg/facebook-black.svg";
import LinkedIn from "../../assets/static/images/svg/linkedin-black.svg";
import Youtube from "../../assets/static/images/svg/youtube-black.svg";

const DataBox = (props) => {
  const [photo, setPhoto] = useState({
    test: "test",
  });
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [courses, setCourses] = useState({
    test: "test",
  });
  const [socials, setSocials] = useState({
    instagram: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  });

  const handleChangePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeCourses = (e) => {
    setCourses(e.target.value);
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

    const payload = { photo, name, title, description, courses, socials }

    console.log(payload);

      apiTeachers
        .insertTeacher(payload)
        .then((res) => {
          window.alert(`Profesor creado exitosamente`);
          window.location.href="/profesores";
        })
        .catch((err) => {
          console.log(err);
        });

  };

  return (
    <section className="teacher__box">
      <form id="createTeacher" onSubmit={handleSubmit}>
        <div className="teacher__box__inside flex">
          <div className="teacher__box__inside__left">
            <h3>Datos Personales</h3>
            <div className="flex">
              <img src={Photo} alt="Colocar tu foto" />
              <div className="teacher__box__inside__left__photo">
                <p className="teacher__box__inside__left__profile">
                  Foto de perfil
                </p>
                <i className="teacher__box__inside__left__recommended">
                  Tamaño recomendado <br />
                  300x300 px
                </i>
              </div>
            </div>
            <div>
              <h5>Nombre Completo</h5>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChangeName}
              />
            </div>
            <div>
              <h5>Titulos / Estudios</h5>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
              />
            </div>
            <div>
              <h5>Descripción</h5>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
            </div>
            <div>
              <h3>Seleccionar cursos</h3>
              <div className="flex">
                <input type="text" placeholder="Escribe el nombre del curso" />
                <img
                  className="teacher__box__inside__left__arrow"
                  src={Arrow}
                  alt="Flecha hacia abajo"
                />
              </div>
            </div>
          </div>
          <div className="teacher__box__inside__right">
            <h3>Redes sociales</h3>
            <div className="teacher__box__inside__right__inside">
              <div className="flex">
                <img src={Instagram} alt="Instagram" />
                <h5>Instagram</h5>
              </div>
              <input
                type="text"
                name="instagram"
                value={socials.instagram}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="teacher__box__inside__right__inside">
              <div className="flex">
                <img src={Twitter} alt="Twitter" />
                <h5>Twitter</h5>
              </div>
              <input
                type="text"
                name="twitter"
                value={socials.twitter}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="teacher__box__inside__right__inside">
              <div className="flex">
                <img src={Facebook} alt="Facebook" />
                <h5>Facebook</h5>
              </div>
              <input
                type="text"
                name="facebook"
                value={socials.facebook}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="teacher__box__inside__right__inside">
              <div className="flex">
                <img src={LinkedIn} alt="LinkedIn" />
                <h5>LinkedIn</h5>
              </div>
              <input
                type="text"
                name="linkedin"
                value={socials.linkedin}
                onChange={handleChangeSocials}
              />
            </div>
            <div className="teacher__box__inside__right__inside">
              <div className="flex">
                <img src={Youtube} alt="YouTube" />
                <h5>YouTube</h5>
              </div>
              <input
                type="text"
                name="youtube"
                value={socials.youtube}
                onChange={handleChangeSocials}
              />
            </div>
            <Button
              text={"Guardar perfil"}
              position={"btn__primary--teacher"}
              type="submit"
            />
          </div>
        </div>
      </form>
    </section>
  );
};
export default DataBox;
