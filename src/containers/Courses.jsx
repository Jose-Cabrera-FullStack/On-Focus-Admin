import React from "react";

import HeroCoursePlus from "../components/Course/HeroCoursePlus";
import CourseInfo from "../components/Course/CourseInfo";
import CourseInclusive from "../components/Course/CourseInclusive";
import CourseForMe from "../components/Course/CourseForMe";
import CourseModule from "../components/Course/CourseModule";
import CourseRecomendation from "../components/Course/CourseRecomendation";
import CourseTeacher from "../components/Course/CourseTeacher";
import HowWeTeach from "../components/Principal/HowWeTeach";

import "../assets/styles/App.scss";

const Course = () => {
  let grid = "grid-column-2--fix";
  return (
    <div className="App">
      <HeroCoursePlus />
      <CourseInfo />
      <CourseInclusive />
      <CourseForMe />
      <CourseModule />
      <CourseRecomendation />
      <CourseTeacher />
      <HowWeTeach grid={grid} />
    </div>
  );
};

export default Course;
