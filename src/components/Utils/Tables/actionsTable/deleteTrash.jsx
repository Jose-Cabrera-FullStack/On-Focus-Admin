import React, { Component } from "react";
import apiTrash from "../../../../api/apiTrash";

class DeleteTrash extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm(`Do you want to delete this item permanently?`)) {
      const payload = this.props.id;

      apiTrash
      .deleteTrashById(payload)
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
      <div
        onClick={this.deleteUser}
        className="course_admin_delete_permanently"
      >
        Eliminar definitivamente
      </div>
    );
  }
}

export default DeleteTrash;
