import Subject from "../ui-elements/one-subject/one-subject";
import Styles from "./allSubjects.module.css"
import { NUMBER_SEMESTER } from "./subjects.data";
import taskData from "./description.json";

function Subjects() {
    const arOptions = taskData.description_courses;
    const listCourses = arOptions.map((arOption, index) => 
    <Subject subject_name={arOption.subject_name} subject_type={arOption.subject_type} title_subject={arOption.title_subject} teatcher_name={arOption.teatcher_name} time_count={arOption.time_count} author_courses={arOption.author_courses} />)
    return <div className={Styles.all_subject}><div className={Styles.container__subjects}>
        {NUMBER_SEMESTER.map((number) => (
            <div className={Styles.row_subjects}>
                <h1 className={Styles.number_semester}>{number}</h1>
                {listCourses}
            </div>
        ))}
    </div>
        Кликните по предмету, чтобы посмотреть его описание

        <div className={Styles.color_descriptionSubject}>
            <div className={Styles.flex}><div className={`${Styles.block} ${Styles.humanitarian}`}></div> <div>Гуманитарные предметы</div></div>
            <div className={Styles.flex}><div className={`${Styles.block} ${Styles.analytical}`}></div> <div>Аналитические предметы</div></div>
            <div className={`${Styles.flex} ${Styles.math_block}`}><div className={`${Styles.block} ${Styles.math}`}></div> <div>Математика</div></div>
            <div className={Styles.flex}><div className={`${Styles.block} ${Styles.programming}`}></div> <div>Программирование</div></div>
            <div className={Styles.flex}><div className={`${Styles.block} ${Styles.natural}`}></div> <div>Естественно-научные предметы</div></div>
        </div>

    </div>
};

export default Subjects;