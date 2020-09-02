import React, { useState } from "react";
import "../../../../assets/styles/components/Table.scss";
import ArrowDown from "../../../../assets/static/images/svg/arrow-down.svg";

import Collapse from "react-bootstrap/Collapse";

const RowStudents = ({
  id,
  name,
  country,
  email,
  signup_date,
  payment_method,
  purchased_courses,
}) => {
  if (status == "Activo") {
    var check = "checked";
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{country}</td>
        <td>{email}</td>
        <td>{signup_date}</td>
        <td>{payment_method}</td>
        <td>{purchased_courses}</td>
        <td>
          <img src={ArrowDown} alt="Ver más" onClick={() => setOpen(!open)} />
        </td>
      </tr>
      <Collapse in={open}>
        <tr>
          <td>Curso 1 2 clases finalizadas, 20% completado el curso.</td>
        </tr>
      </Collapse>
    </>
  );
};

export default RowStudents;
