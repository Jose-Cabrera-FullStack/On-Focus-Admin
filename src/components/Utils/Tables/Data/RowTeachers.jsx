import React from 'react';
import '../../../../assets/styles/components/Table.scss';
import DeleteTeacher from '../actionsTable/deleteTeacher'

const RowTeachers = ({id, name, status, coursesAssigned }) => {
  if(status == "Activo") {
    var check = "checked"
  }
  return(
        <>
            <td><input type="checkbox" name="" id=""/></td>
            <td>{name}</td>
            <td><input type="checkbox" name="" id="" checked={check}/>{status}</td>
            <td>{coursesAssigned}</td>
            <td>Añadir/Quitar cursos</td>
            <td><span><DeleteTeacher id={id} /></span></td>
        </>
  );
}

export default RowTeachers;