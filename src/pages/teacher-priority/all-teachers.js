import CourseTeacher from "./subject-teachers/subjest-teacher"
import taskData from "./techers.json"
import Button from "../ui-elements/button/Button";
import "./all-teachers.css"

function AllTeachers() {
   const arOptions = taskData.academic_subject;
   const listTeachers = arOptions.map((arOption, index) => 
      <CourseTeacher titleValue={arOption.subject} titleTeachers={arOption.teachers} ID={index + 1000}/>
   )
     


   return <div className="allCourses">
      <h2 className="teachersTitle">Расставьте приоритет выбора преподавателей</h2>
      {listTeachers}
      <div className="button__wrap">
            <Button title="Сохранить" size="extraLarge" />
      </div>
   </div>;
}

export default AllTeachers;