import React, { useState, useEffect } from "react";
import apiTrash from "../../../api/apiTrash";
import RowTrash from "./Data/RowTrash";
import "../../../assets/styles/components/Table.scss";
import Moment from 'moment';

const SideBar = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    apiTrash
      .getTrash()
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
