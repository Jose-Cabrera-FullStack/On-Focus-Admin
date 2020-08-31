import React, { useState, useEffect } from "react";
import apiCategories from "../../../api/apiCategories";
import Moment from "moment";
import Loader from "react-loader-spinner";
import RowCategories from "./Data/RowCategories";
import "../../../assets/styles/components/Table.scss";

const SideBar = () => {
  const [data, SetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    apiCategories
      .getAllCategories()
      .then((res) => {
        SetData(res.data.data);
        setIsLoaded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return isLoaded ? (
    <section className="loadingDiv">
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
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
            <th>Fecha de Creacion</th>
            <th>Estado</th>
            <th>Cursos</th>
            <th></th>
            <th></th>
          </tr>
          {Object.keys(data).map((index) => {
            Moment.locale("en");
            return (
              <tr key={index}>
                <RowCategories
                  id={data[index]._id}
                  name={data[index].name}
                  creation_date={Moment(data[index].createdAt).format(
                    "DD/MM/YY"
                  )}
                  status={data[index].status}
                  coursesAssigned={"Lorem Ipsum"}
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
