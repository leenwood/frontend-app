import Course from "./course/course";
import taskData from "./course.json"
import "./all-courses.css";
import Button from "../ui-elements/button/Button";

function AllCourse() {
   const arOptions = taskData.academic_subject;
   const listCourses = arOptions.map((arOption, index) => 
      <Course titleValue={arOption.subject} titleCourse={arOption.courses} ID={index * 100}/>
   )
     


   return <div className="allCourses">
      <h2 className="titlePriorityCourses">Расставьте приоритет выбора курсов в рамках каждого предмета</h2>
      {listCourses}
      <div className="button__wrap">
            <Button title="Сохранить" size="extraLarge" />
      </div>
   </div>;
}

export default AllCourse;