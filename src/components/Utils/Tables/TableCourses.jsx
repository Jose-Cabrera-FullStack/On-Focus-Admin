import React, { useState, useEffect } from "react";
import apiCourses from "../../../api/apiCourses";
import Moment from "moment";
import Loader from "react-loader-spinner";
import RowCourses from "./Data/RowCourses";
import Table from "react-bootstrap/Table";

const TableCourses = () => {
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
              <th>
                <input type="checkbox" />
              </th>
              <th>Nombre</th>
              <th>Profesor</th>
              <th>Categoria</th>
              <th>Fecha de Creacion</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(data).map((index) => {
              Moment.locale("en");
              return (
                <tr key={index}>
                  <RowCourses
                    id={data[index]._id}
                    name={data[index].name}
                    teacher={data[index].teacher.full_name}
                    category={data[index].category.name}
                    creation_date={Moment(data[index].createdAt).format(
                      "DD/MM/YY"
                    )}
                    status={data[index].status}
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

export default TableCourses;
