import React, { Component } from "react";
import apiStudent from "../../../../api/apiStudents";
import Icon from "../../../../assets/static/images/svg/icon-trash.svg";

class DeleteStudent extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm(`Do you want to delete this student permanently?`)) {
        const payload = this.props.id;

        apiStudent
        .deleteStudentById(payload)
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
        <img src={Icon} alt="Borrar" />
      </div>
    );
  }
}

export default DeleteStudent;
