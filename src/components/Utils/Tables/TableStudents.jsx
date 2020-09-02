import React, { useState, useEffect } from "react";
import apiStudents from "../../../api/apiStudents";
import RowStudents from "./Data/RowStudents";
import "../../../assets/styles/components/Table.scss";
import Loader from "react-loader-spinner";
import Moment from 'moment';

const SideBar = () => {
  const [data, SetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    apiStudents
      .getAllStudents()
      .then((res) => {
        SetData(res.data.data);
        setIsLoaded(false);
      })
      .catch((err) => {
        setIsLoaded(false);
      });
  }, []);

  return isLoaded ? (
    <section className="loadingDiv">
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </section>
  ) : !data ? (
    <section className="loadingDiv">
      <p>No hay níngun estudiante aún..</p>
    </section>
  ) : (
    <section className="course__admin__inside">
      <table id="customers">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>País</th>
            <th>Email</th>
            <th>Fecha registro</th>
            <th>Medio de pago</th>
            <th>Cursos comprados</th>
            <th></th>
          </tr>
          {Object.keys(data).map((index) => {
            return (
                  <RowStudents
                  key={index}
                    id={data[index]._id}
                    name={data[index].name}
                    country={data[index].country}
                    email={data[index].email}
                    signup_date={Moment(data[index].signup_date).format('DD/MM/YY')} 
                    payment_method={data[index].payment_method}
                    purchased_courses={data[index].purchased_courses}
                  />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SideBar;
