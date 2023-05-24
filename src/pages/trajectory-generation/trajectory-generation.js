import Calendar from "../calendar/index"
import AllCourse from "../course-priority/all-course";
import AllTeachers from "../teacher-priority/all-teachers";
import "./trajectory-generation.css"

function GenerateTrejectory() {
    return <div>
        <h2 className="trajectory_generation__title">Построение траектории</h2>
        <div className="note__container">
            <h2>ПРИМЕЧАНИЕ</h2>
            <p>Данный раздел создан для автоматизации выбора вашей индивидуальной образовательной траектории.  Перед началом работы в сервисе озакомьтесь с описаниями курсов </p>
        </div>
        <AllCourse />
        <Calendar />
        <AllTeachers />
    </div>
}

export default GenerateTrejectory;