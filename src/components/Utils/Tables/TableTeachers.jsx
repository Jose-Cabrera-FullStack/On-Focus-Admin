import React, { useState, useEffect } from "react";
import apiTeachers from "../../../api/apiTeachers";
import RowTeachers from "./Data/RowTeachers";
import Loader from "react-loader-spinner";
import "../../../assets/styles/components/Table.scss";

const SideBar = () => {
  const [data, SetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    apiTeachers
      .getAllTeachers()
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
      <p>No hay níngun profesor aún. Intenta añadir uno.</p>
    </section>
  ) : (
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
