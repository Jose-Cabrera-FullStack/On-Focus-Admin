import React, { useState, useEffect } from "react";
import apiTeachers from "../../../api/apiTeachers";
import RowTeachers from "./Data/RowTeachers";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";

const TableTeachers = () => {
  const [data, SetData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const formatString = (raw) => {
    let stepOne = raw.join(", ");
    let stepTwo = raw ? stepOne.slice(0, 20)+'...' : null;
    
    return stepTwo;
  }

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
    <div>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  ) : !data ? (
    <div>
      <p>No hay ningún profesor aún. Intenta añadir uno.</p>
    </div>
  ) : (
    <div className="col-md-12">
      <div className="row insideTableSection">
        <Table hover responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Curso dictados</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(data).map((index) => {
              let coursesArray = [];
              Object.keys(data[index].courses).map((i) => {
                return coursesArray.push(data[index].courses[i].name)
              });
              return (
                <tr key={index}>
                  <RowTeachers
                    id={data[index]._id}
                    full_name={data[index].full_name}
                    status={data[index].status}
                    coursesAssigned={formatString(coursesArray)}
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

export default TableTeachers;
