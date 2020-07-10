import React from 'react';

import '../../../../assets/styles/components/Table.scss';


import Icon from '../../../../assets/static/images/svg/icon-trash.svg'

const Row = ({name, teacher, category, creationDate}) => {
  return(
        <>
            <td><input type="checkbox" name="" id=""/></td>
            <td>{name}</td>
            <td>{teacher}</td>
            <td>{category}</td>
            <td>{creationDate}</td>
            <td><input type="checkbox" name="" id=""/>Activo</td>
            <td><img src={Icon} alt=""/></td>
        </>
  );
}

export default Row;
