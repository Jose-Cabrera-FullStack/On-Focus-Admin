import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/Utils/SideBar";
import Button from "../components/Utils/Button";
import Search from "../components/Utils/Search";
import Table from "../components/Utils/Tables/TableTeachers";

import "../assets/styles/components/CourseAdmin.scss";

const Teachers = (props) => {
  return (
    <div className="App flex">
      <SideBar />
      <div>
        <div className="course__admin flex">
          <h1>Profesores</h1>
          <Link to="/profesores-creacion">
            <Button
              text={"Añadir nuevo"}
              position={"btn__primary--course__admin"}
            />
          </Link>
          <Search />
        </div>
        <div className="course__admin__categories flex">
          <p>Todos</p>
          <p>Categorias</p>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Teachers;
