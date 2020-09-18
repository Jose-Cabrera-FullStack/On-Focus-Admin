import React from 'react';
import DeleteCategory from '../actionsTable/deleteCategory'
import ChangeStatusCategory from '../actionsTable/changeStatusCategory'

const RowCourses = ({id, name, creation_date, status, coursesAssigned }) => {
  
  var status_read

  if(status === true) {
    var check = "checked"
    status_read = "Activo"
  } else {
    status_read = "Inactivo"
  }

  return(
        <>  
            <td>{name}</td>
            <td>{creation_date}</td>
            <td><ChangeStatusCategory id={id} status={check} status_read={status_read}/></td>
            <td>{coursesAssigned}</td>
            <td>Añadir/quitar cursos</td>
            <td><span><DeleteCategory id={id} /></span></td>
        </>
  );
}

export default RowCourses;