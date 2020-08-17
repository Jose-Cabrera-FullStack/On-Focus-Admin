import React from "react";
import "../../../../assets/styles/components/Table.scss";
import DeleteTrash from "../actionsTable/deleteTrash";
import RestoreTrash from "../actionsTable/restoreTrash";

const RowTrash = ({ id, name, type, creation_date }) => {
  switch (type) {
    case "teacher":
      var readable_type = "Profesor";
      break;

    case "category":
      var readable_type = "Categoría";
      break;

    case "course":
      var readable_type = "Curso";
      break;
  }

  return (
    <>
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>{name}</td>
      <td>{readable_type}</td>
      <td>{creation_date}</td>
      <td><RestoreTrash id={id}/></td>
      <td><DeleteTrash id={id}/></td>
    </>
  );
};

export default RowTrash;
