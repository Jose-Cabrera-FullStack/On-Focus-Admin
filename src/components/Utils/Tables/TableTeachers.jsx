import React,{useState,useEffect} from 'react';
import apiTeachers from "../../../api/apiTeachers"

import Row from './Data/Row'

import '../../../assets/styles/components/Table.scss';

const SideBar = () => {

// Aca use Fetch, pero puedes usar Axios si es mas comodo para ti
   const [data, SetData] = useState([])
    
   useEffect(()=>{
    apiTeachers.getAllTeachers()
       .then(res => {
           SetData(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    
  return(
        <section className="course__admin__inside">
           <table id="customers">
               <tbody>

                <tr>
                    <th className="course__admin__inside__checkbox"><input type="checkbox" name="" id=""/></th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Curso dictados</th>
                    <th></th>
                    <th></th>
                </tr>
                {Object.keys(data).map((index)=>{
                    if (data[index].status == true) {
                        var status = "Activo"
                    } else {
                        status = "Inactivo"
                    }
                    return(
                        <tr key={index}>
                           
                              <Row id={data[index]._id} name = {data[index].name} status = {status} coursesAssigned = {"2"} />
                        </tr>
                    )
                })}
            
            </tbody>
            </table>
        </section>
    
  );
}

export default SideBar;
