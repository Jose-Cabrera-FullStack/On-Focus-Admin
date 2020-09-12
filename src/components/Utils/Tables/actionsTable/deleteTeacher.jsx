import React, { Component } from "react";
import apiTeachers from "../../../../api/apiTeachers";
import Icon from "../../../../assets/static/images/svg/icon-trash.svg";

class DeleteTeacher extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm(`¿Desea enviar este profesor a la papelera?`)) {
      const payload = this.props.id;

      apiTeachers
        .sendTeacherToTrash(payload)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  render() {
    return (
      <div onClick={this.deleteUser}>
        <img src={Icon} alt="Enviar a la papelera" className="sendToTrash" />
      </div>
    );
  }
}

export default DeleteTeacher;
