import React from 'react';
import '../../../../assets/styles/components/Table.scss'
import DeleteCourse from '../actionsTable/deleteCourse'

const RowCourses = ({id, name, teacher, category, creation_date, status }) => {
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
            <td>{teacher}</td>
            <td>{category}</td>
            <td>{creation_date}</td>
            <td><input type="checkbox" name="" id="" checked={check}/>{status_read}</td>
            <td><span><DeleteCourse id={id} /></span></td>
        </>
  );
}

export default RowCourses;