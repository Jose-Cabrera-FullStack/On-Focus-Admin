import React, { Component } from "react";
import apiCategories from "../../../../api/apiCategories";

class ChangeStatusCategory extends Component {
  changeEntityStatus = (event) => {
    event.preventDefault();

    if (window.confirm(`¿Deseas cambiar el estado?`)) {
      const id = this.props.id;
      const payload = { status: this.props.status_read }

      apiCategories
        .updateCategoryStatusbyId(id, payload)
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
      <>
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.props.status}
          onChange={this.changeEntityStatus}
        />{" "}
        {this.props.status_read}
      </>
    );
  }
}

export default ChangeStatusCategory;
