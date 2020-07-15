import React, { useState, useEffect } from "react";
import apiStudents from "../../../api/apiStudents";

import RowStudents from "./Data/RowStudents";

import "../../../assets/styles/components/Table.scss";

const SideBar = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    apiStudents
      .getAllStudents()
      .then((res) => {
        SetData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
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
              <tr key={index}>
                <RowStudents
                  id={data[index]._id}
                  name={data[index].name}
                  country={data[index].country}
                  email={data[index].email}
                  signup_date={data[index].signup_date}
                  payment_method={data[index].payment_method}
                  purchased_courses={data[index].purchased_courses}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SideBar;
