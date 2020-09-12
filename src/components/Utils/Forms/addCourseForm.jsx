import React, { useState } from "react";
import apiTeachers from "../../../api/apiTeachers";
import "../../../assets/styles/components/forms.scss";
import GeneralModal from "../Modals/GeneralModal";
import Button from "../Button";

const AddCourseForm = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [video, setVideo] = useState();

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
        </div>

        <div className="col-md-4">
          <div className="insideTableSection p-3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              commodi magni quo odit, impedit deleniti quaerat expedita omnis
              quasi dignissimos eligendi suscipit nostrum autem consectetur
              numquam nisi molestiae totam mollitia.
            </p>
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
