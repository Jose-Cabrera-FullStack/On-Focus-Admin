import React, { Component } from "react";
import apiCategories from "../../../../api/apiCategories";
import Icon from "../../../../assets/static/images/svg/icon-trash.svg";

class DeleteCategory extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm(`¿Desea enviar esta categoría a la papelera?`)) {
      const payload = this.props.id;

      apiCategories
        .sendCategoryToTrash(payload)
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

export default DeleteCategory;
