import React, { useState, useEffect, useRef } from "react";
import Checkbox from "../../ui-elements/checkbox/Checkbox";
import TeachersBlock from "../teachers-block/teachers-block";
import "./subject-teacher.css"


function CourseTeacher(props) {
   const [activeState, setActiveState] = useState(false);


   return <div className="container">
      <div className="teachers__container" onClick={() => setActiveState((activeState) => !activeState)}>
         <div>{props.titleValue}</div>
         <div className="checkbox__container"><Checkbox id={props.ID} title="Важен приоритет преподавателей"/> </div> 
      </div>
      <div className={`blocks__container ${activeState ? 'active' : ''}`}>
         {props.titleTeachers.map((course, index) => <TeachersBlock title={course} id={index + 1 + props.ID}/>)}
         {/* <TeachersBlock title={props.titleTeachers} id={1 + props.ID}/> */}
      </div>
   </div>;
}

export default CourseTeacher;