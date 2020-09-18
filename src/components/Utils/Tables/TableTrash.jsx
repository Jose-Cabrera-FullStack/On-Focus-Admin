import React, { useState, useEffect } from "react";
import apiTrash from "../../../api/apiTrash";
import RowTrash from "./Data/RowTrash";
import Moment from "moment";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";

const TableTrash = () => {
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
    <div>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  ) : !data ? (
    <div>
      <p>Papelera vacía.</p>
    </div>
  ) : (
    <div className="col-md-12">
      <div className="row insideTableSection">
        <Table hover responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Fecha de Creacion</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(data).map((index) => {
              return (
                <tr key={index}>
                  <RowTrash
                    id={data[index].original_id_hash}
                    name={data[index].name}
                    type={data[index].type}
                    creation_date={Moment(data[index].createdAt).format(
                      "DD/MM/YY"
                    )}
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

export default TableTrash;
