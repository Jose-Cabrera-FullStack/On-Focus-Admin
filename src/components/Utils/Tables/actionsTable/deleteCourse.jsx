import React, { Component } from "react";
import apiCourses from "../../../../api/apiCourses";
import Icon from "../../../../assets/static/images/svg/icon-trash.svg";

class DeleteCourse extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm(`Do you want to send this course to trash?`)) {
      const sendToTrashCourse = apiCourses.sendCourseToTrash(this.props.id)
        if(sendToTrashCourse) {
        window.location.reload();
      }
    }
  };

  render() {
    return (
      <div onClick={this.deleteUser}>
        <img src={Icon} alt="Enviar a la papelera" />
      </div>
    );
  }
}

export default DeleteCourse;
