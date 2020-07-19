import React from 'react';
import '../../../../assets/styles/components/Table.scss'
import DeleteStudent from '../actionsTable/deleteStudent'

const RowStudents = ({id, name, country, email, signup_date, payment_method, purchased_courses }) => {
  if(status == "Activo") {
    var check = "checked"
  }
  return(
        <>
            <td>{name}</td>
            <td>{country}</td>
            <td>{email}</td>
            <td>{signup_date}</td>
            <td>{payment_method}</td>
            <td>{purchased_courses}</td>
            <td>Icon</td>
        </>
  );
}

export default RowStudents;