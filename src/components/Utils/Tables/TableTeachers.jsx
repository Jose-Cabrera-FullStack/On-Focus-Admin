import React, { useState, useEffect } from "react";
import apiTeachers from "../../../api/apiTeachers";
import RowTeachers from "./Data/RowTeachers";
import "../../../assets/styles/components/Table.scss";

const SideBar = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    apiTeachers
      .getAllTeachers()
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
            <th className="course__admin__inside__checkbox">
              <input type="checkbox" name="" id="" />
            </th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Curso dictados</th>
            <th></th>
            <th></th>
          </tr>
          {Object.keys(data).map((index) => {
            return (
              <tr key={index}>
                <RowTeachers
                  id={data[index]._id}
                  name={data[index].name}
                  status={data[index].status}
                  coursesAssigned={"no data"}
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
