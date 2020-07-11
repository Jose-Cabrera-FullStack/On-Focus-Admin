import React,{useState,useEffect} from 'react';
import axios from 'axios'

import Row from './Data/Row'

import '../../../assets/styles/components/Table.scss';

const SideBar = () => {

// Aca use Fetch, pero puedes usar Axios si es mas comodo para ti
   const [data, SetData] = useState([])
    
   useEffect(()=>{
       axios
       .get('https://jsonplaceholder.typicode.com/todos/1')
       .then(res => {
           console.log(res)
           SetData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    
    console.log('mira aca ', data.title)

//   De esta manera se pasan los datos entre componentes
    let DatosDeApi = [ 
    
        <Row name = {data.title} teacher = {"Juan Cabrera"} category = {"Marketing"} creationDate = {"02/07/2020"}/>,
        <Row name = {"Curso 2"} teacher = {"Juan Cabrera"} category = {"Marketing"} creationDate = {"02/07/2020"}/>,
        <Row name = {"Curso 3"} teacher = {"Juan Cabrera"} category = {"Marketing"} creationDate = {"02/07/2020"}/>,
    ]


  return(
        <section className="course__admin__inside">
           <table id="customers">
               <tbody>

                <tr>
                    <th className="course__admin__inside__checkbox"><input type="checkbox" name="" id=""/></th>
                    <th>Nombre</th>
                    <th>Profesor</th>
                    <th>Categoría</th>
                    <th>Fecha de creación</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
                {/* Se van a renderizar en un bucle todos los datos que vengan de la API en forma de array */}
                {/* Debes sustituir "DatosDeApi" por lo que seria el array con los datos de la API, ejemplo "fakeArrayApi "*/}
                {DatosDeApi.map((item,index)=>{
                    return(
                        <tr key={index} >
                        {item}
                        </tr>
                    )
                })}
            
            </tbody>
            </table>
        </section>
    
  );
}

export default SideBar;
