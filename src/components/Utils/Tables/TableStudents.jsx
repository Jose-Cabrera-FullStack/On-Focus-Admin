import React, { useState, useEffect } from "react";
import apiStudents from "../../../api/apiStudents";
import Table from "react-bootstrap/Table";
import RowStudents from "./Data/RowStudents";
import Moment from "moment";
import Loader from "react-loader-spinner";

const TableStudents = () => {
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
    <div>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  ) : !data ? (
    <div>
      <p>No hay ningun alumno aún.</p>
    </div>
  ) : (
    <div className="col-md-12">
      <div className="row insideTableSection">
        <Table hover responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>País</th>
              <th>E-mail</th>
              <th>Fecha de Registro</th>  
              <th>Medio de Pago</th>
              <th>Cursos Comprados</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((index) => {
              return (
                <RowStudents
                  key={index}
                  id={data[index]._id}
                  name={data[index].name}
                  country={data[index].country}
                  email={data[index].email}
                  signup_date={Moment(data[index].createdAt).format("DD/MM/YY")}
                  payment_method={data[index].payment_method}
                  purchased_courses={data[index].purchased_courses}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableStudents;
