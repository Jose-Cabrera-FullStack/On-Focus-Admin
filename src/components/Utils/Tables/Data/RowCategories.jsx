import React from 'react';
import '../../../../assets/styles/components/Table.scss'
import DeleteCategory from '../actionsTable/deleteCategory'

const RowCourses = ({id, name, creation_date, status, coursesAssigned }) => {
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
            <td>{creation_date}</td>
            <td><input type="checkbox" name="" id="" checked={check}/>{status_read}</td>
            <td>{coursesAssigned}</td>
            <td>Añadir/quitar cursos</td>
            <td><span><DeleteCategory id={id} /></span></td>
        </>
  );
}

export default RowCourses;