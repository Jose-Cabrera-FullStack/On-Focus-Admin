import React, { Component } from "react";
import apiCategories from "../../../../api/apiCategories";
import Icon from "../../../../assets/static/images/svg/icon-trash.svg";

class DeleteCategory extends Component {
  deleteCategory = (event) => {
    event.preventDefault();

    if (window.confirm(`Do you want to send this category to trash?`)) {
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
      <div onClick={this.deleteCategory}>
        <img src={Icon} alt="Enviar a la papelera" />
      </div>
    );
  }
}

export default DeleteCategory;
