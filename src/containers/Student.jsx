import React from 'react';

import SideBar from '../components/Utils/SideBar';
import Button from '../components/Utils/Button'
import Search from '../components/Utils/Search'
import Table from '../components/Utils/Tables/TableCourse'


import '../assets/styles/components/CourseAdmin.scss';

const Teachers = (props) => {

  return(
    <div className="App flex">
        <SideBar/>
        <div>
            <div className="course__admin flex">
                <h1>Alumnos</h1>
                <Search/>
            </div>
                <div className="course__admin__categories flex">
                    <p>Todos</p>
                    <p>Orden Alfabetico</p>
                    <p>Fecha de Registro </p>
                </div>
                <Table/> 

                
        </div>
    </div>
  );
}

export default Teachers;