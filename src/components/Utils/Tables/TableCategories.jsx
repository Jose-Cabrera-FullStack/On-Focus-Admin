import React, { useState, useEffect } from "react";
import apiCategories from "../../../api/apiCategories";
import Moment from "moment";
import Loader from "react-loader-spinner";
import RowCategories from "./Data/RowCategories";
import Table from "react-bootstrap/Table";

const TableCategories = () => {
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
        setIsLoaded(false);
      });
  }, []);

  return isLoaded ? (
    <div>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  ) : !data ? (
    <div>
      <p>No hay ninguna categoría aún. Intenta añadir una.</p>
    </div>
  ) : (
    <div className="col-md-12">
      <div className="row insideTableSection">
        <Table hover responsive>
          <thead>
            <tr>
              <th><input type="checkbox"/></th>
              <th>Nombre</th>
              <th>Fecha de Creación</th>
              <th>Estado</th>
              <th>Cursos</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
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
        </Table>

      </div>
    </div>
  );
};

export default TableCategories;
