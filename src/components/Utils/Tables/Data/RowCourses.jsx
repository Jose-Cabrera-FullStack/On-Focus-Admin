import React from 'react';
import '../../../../assets/styles/components/Table.scss'
import DeleteCourse from '../actionsTable/deleteCourse'

const RowCourses = ({id, name, teacher, category, creation_date, status }) => {
  if(status == true) {
    var check = "checked"
  }
  return(
        <>  
            <td><input type="checkbox" name="" id=""/></td>
            <td>{name}</td>
            <td>{teacher}</td>
            <td>{category}</td>
            <td>{creation_date}</td>
            <td><input type="checkbox" name="" id="" checked={check}/>{status}</td>
            <td><span><DeleteCourse id={id} /></span></td>
        </>
  );
}

export default RowCourses;