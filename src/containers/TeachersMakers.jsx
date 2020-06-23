import React from 'react';
import {connect} from 'react-redux';

import SideBar from '../components/Utils/SideBar';
import DataBox from '../components/Teachers/DataBox'
import Search from '../components/Utils/Search'

import '../assets/styles/components/Teacher.scss';

const Categories = (props) => {

  return(
    <div className="App flex">
        <SideBar/>
        <div>
            <div className="course__admin flex">
                <h1>Profesores</h1>
                <Search onlySession={'none'}/>
            </div>
           <DataBox/>
                
        </div>
    </div>
  );
}

export default connect(null,null)(Categories);