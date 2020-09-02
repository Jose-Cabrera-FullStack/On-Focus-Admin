import React, { useState, useEffect } from "react";
import apiCourses from "../../../api/apiCourses";
import Moment from "moment";
import Loader from "react-loader-spinner";
import RowCourses from "./Data/RowCourses";
import "../../../assets/styles/components/Table.scss";

const SideBar = () => {
  const [data, SetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    apiCourses
      .getAllCourses()
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
      <p>No hay níngun curso aún. Intenta añadir uno.</p>
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
            <th>Profesor</th>
            <th>Categoria</th>
            <th>Fecha de Creacion</th>
            <th>Estado</th>
            <th></th>
          </tr>
          {Object.keys(data).map((index) => {
            Moment.locale("en");
            return (
              <tr key={index}>
                <RowCourses
                  id={data[index]._id}
                  name={data[index].name}
                  teacher={"Lorem Ipsum"}
                  category={"Lorem Ipsum"}
                  creation_date={Moment(data[index].creation_date).format(
                    "DD/MM/YY"
                  )}
                  status={data[index].status}
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
