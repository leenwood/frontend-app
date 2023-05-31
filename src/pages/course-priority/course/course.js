import React, { useState, useEffect, useRef } from "react";
import "./course.css";
import Checkbox from "../../ui-elements/checkbox/Checkbox";
import Block from "../chooise-course/block-choise";


function Course(props) {
   const [activeState, setActiveState] = useState(false);


   return <div className="container">
      <div className={`course__container ${activeState ? 'active_' : ''}`} onClick={() => setActiveState((activeState) => !activeState)}>
         <div>{props.titleValue}</div>
         <div className="checkbox__container"><Checkbox id={props.ID}/> </div> 
      </div>
      <div className={`blocks__container ${activeState ? 'active' : ''}`}>
         {props.titleCourse.map((course, index) => <Block title={course} id={index + 1 + props.ID}/>)}
         
      </div>
   </div>;
}

export default Course;