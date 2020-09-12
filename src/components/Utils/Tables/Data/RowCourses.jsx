import React from 'react';
import DeleteCourse from '../actionsTable/deleteCourse'
import ChangeStatusCourse from '../actionsTable/changeStatusCourse'

const RowCourses = ({id, name, teacher, category, creation_date, status }) => {

  var status_read

  if(status === true) {
    var check = "checked"
    status_read = "Activo"
  } else {
    status_read = "Inactivo"
  }
  
  return(
        <>  
            <td><input type="checkbox" name="" id=""/></td>
            <td>{name}</td>
            <td>{teacher}</td>
            <td>{category}</td>
            <td>{creation_date}</td>
            <td><ChangeStatusCourse id={id} status={check} status_read={status_read}/></td>
            <td><span><DeleteCourse id={id} /></span></td>
        </>
  );
}

export default RowCourses;