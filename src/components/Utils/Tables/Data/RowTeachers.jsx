import React from 'react';
import DeleteTeacher from '../actionsTable/deleteTeacher'
import ChangeStatusTeacher from '../actionsTable/changeStatusTeacher'

const RowTeachers = ({id, full_name, status, coursesAssigned }) => {

  var status_read

  if(status === true) {
    var check = "checked"
    status_read = "Activo"
  } else {
    status_read = "Inactivo"
  }
  
  return(
        <>
            <td>{full_name}</td>
            <td><ChangeStatusTeacher id={id} status={check} status_read={status_read}/></td>
            <td>{coursesAssigned}</td>
            <td>Añadir/Quitar cursos</td>
            <td><span><DeleteTeacher id={id} /></span></td>
        </>
  );
}

export default RowTeachers;