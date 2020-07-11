import React from 'react';

import '../../../assets/styles/components/Table.scss';

import Row from './Data/Row'

const SideBar = () => {
  return(
        <section className="course__admin__inside">
           <table id="customers">
            <tr>
                <th className="course__admin__inside__checkbox"><input type="checkbox" name="" id=""/></th>
                <th>Nombre</th>
                <th>Profesor</th>
                <th>Categoría</th>
                <th>Fecha de creación</th>
                <th>Estado</th>
                <th></th>
            </tr>
            <Row/>
 
            </table>
        </section>
    
  );
}

export default SideBar;
