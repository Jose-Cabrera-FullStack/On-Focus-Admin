import React from 'react';
import '../../../../assets/styles/components/Table.scss';
import DeleteTeacher from '../actionsTable/deleteTeacher'

const RowTrash = ({id, name, type, creation_date }) => {

  return(
        <>
            <td><input type="checkbox" name="" id=""/></td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{creation_date}</td>
            <td>Restaurar</td>
            <td>Eliminar definitivamente</td>
        </>
  );
}

export default RowTrash;