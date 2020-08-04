import React from 'react';
import '../../../../assets/styles/components/Table.scss';
import DeleteTeacher from '../actionsTable/deleteTeacher'

const RowTeachers = ({id, name, status, coursesAssigned }) => {
  if(status == true) {
    var check = "checked"
    var status_read = "Activo"
  } else {
    var status_read = "Inactivo"
  }
  return(
        <>
            <td><input type="checkbox" name="" id=""/></td>
            <td>{name}</td>
            <td><input type="checkbox" name="" id="" checked={check}/>{status_read}</td>
            <td>{coursesAssigned}</td>
            <td>Añadir/Quitar cursos</td>
            <td><span><DeleteTeacher id={id} /></span></td>
        </>
  );
}

export default RowTeachers;