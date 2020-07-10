import React from 'react';
import {connect} from 'react-redux';

import apiTeachers from '../../../api'

import Icon from '../../../assets/static/images/svg/icon-trash.svg'

import '../../../assets/styles/components/Table.scss';

const SideBar = () => {
    
  return(
        <section className="course__admin__inside">
           <table id="customers">
            <tr>
                <th className="course__admin__inside__checkbox"><input type="checkbox" name="" id=""/></th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Cursos dictados</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id=""/></td>
                <td>Nombres</td>
                <td><input type="checkbox" name="" id=""/>Activo</td>
                <td>1, 2 3</td>
                <td>Añadir/quitar cursos</td>
                <td><img src={Icon} alt=""/></td>
            </tr>
            {/* <tr>
                <td><input type="checkbox" name="" id=""/></td>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
                <td>01/12/19</td>
                <td><input type="checkbox" name="" id=""/>Activo</td>
                <td><img src={Icon} alt=""/></td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id=""/></td>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>01/12/19</td>
                <td><input type="checkbox" name="" id=""/>Activo</td>
                <td><img src={Icon} alt=""/></td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id=""/></td>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>01/12/19</td>
                <td><input type="checkbox" name="" id=""/>Activo</td>
                <td><img src={Icon} alt=""/></td>
            </tr> */}
            </table>
        </section>
    
  );
}

export default connect(null,null)(SideBar);
