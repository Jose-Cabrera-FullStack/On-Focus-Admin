import React, { Component } from "react";
import apiTrash from "../../../../api/apiTrash";

class RestoreTrash extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm(`Do you want to restore this item?`)) {
      const payload = this.props.id;

      apiTrash
      .restoreTrashById(payload)
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
      <div onClick={this.deleteUser} className="course_admin_restore_trash">
        Restaurar
      </div>
    );
  }
}

export default RestoreTrash;
