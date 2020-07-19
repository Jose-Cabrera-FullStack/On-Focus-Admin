import React from 'react';
import '../../../../assets/styles/components/Table.scss'
import DeleteCategory from '../actionsTable/deleteCategory'

const RowCourses = ({id, name, creation_date, status, coursesAssigned }) => {
  if(status == true) {
    var check = "checked"
  }
  return(
        <>  
            <td><input type="checkbox" name="" id=""/></td>
            <td>{name}</td>
            <td>{creation_date}</td>
            <td><input type="checkbox" name="" id="" checked={check}/>{status}</td>
            <td>{coursesAssigned}</td>
            <td></td>
            <td><span><DeleteCategory id={id} /></span></td>
        </>
  );
}

export default RowCourses;