import React, { Component } from "react";
import apiTrash from "../../../../api/apiTrash";

class DeleteTrash extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm(`¿Desea eliminar este item permanentemente?`)) {
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
      <div onClick={this.deleteUser} className="deletePermanently">
        Eliminar definitivamente
      </div>
    );
  }
}

export default DeleteTrash;
