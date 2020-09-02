import React, { useState, useEffect } from "react";
import apiTrash from "../../../api/apiTrash";
import RowTrash from "./Data/RowTrash";
import Moment from 'moment';
import Loader from "react-loader-spinner";
import "../../../assets/styles/components/Table.scss";

const SideBar = () => {
  const [data, SetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    apiTrash
      .getTrash()
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
      <p>No hay ninguna categoría aún. Intenta añadir una.</p>
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
            <th>Tipo</th>
            <th>Fecha de creación</th>
            <th></th>
            <th></th>
          </tr>
          {Object.keys(data).map((index) => {
            return (
              <tr key={index}>
                <RowTrash
                  id={data[index].original_id_hash}
                  name={data[index].name}
                  type={data[index].type}
                  creation_date={Moment(data[index].creation_date).format('DD/MM/YY')}
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
