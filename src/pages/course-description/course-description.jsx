import s from "./course-description.module.css";
import Criterion from "./criterion/criterion";
import folder_light from "../../img/folder-light.svg";
const CourseDescription = (props) => {
    return(
        <div className={s.wrapp}>
            <div className={s.description}>
                <p className={s.mainHead}>{props.courseName}</p>
                <div className={s.progressBarContainer}>
                    <p>Итоговый балл:</p>
                    <div className={s.progressBar}>
                        <div className={s.line} style={{
                            width: props.progress,
                        }}>
                        </div>
                    </div>

                </div>
                <div className={s.card}>
                    <Criterion image={folder_light} description='Бальная шкала оценивания'/>
                    <Criterion image={folder_light} description='Привет'/>
                    <Criterion image={folder_light} description='Привет'/>
                    <Criterion image={folder_light} description='Привет'/>
                </div>
                <div className={s.annotation}>
                    <p className={s.head}>Аннотация</p>
                    <div className={s.content}>
                        {props.annotation}
                    </div>
                </div>
                <div className={s.result}>
                    <p className={s.head}>Образовательный результат</p>
                    <div className={s.content}>
                        ОПК-2 - Способен формализовывать и решать задачи, относящиеся к профессиональной деятельности, используя методы моделирования и математического анализа<br/>
                        З-1 - Привести примеры использования методов моделирования и математического анализа в решении задач, относящихся к профессиональной деятельности<br/>
                        У-1 - Обоснованно выбрать возможные методы моделирования и математического анализа для предложенных задач профессиональной деятельности<br/>
                        П-1 - Решать поставленные задачи, относящиеся к области профессиональной деятельности, используя освоенные за время обучения пакеты прикладных программ для моделирования и математического анализа<br/>
                        Д-1 - Способность к самообразованию, к самостоятельному освоению новых методов математического анализа и моделирования<br/>
                    </div>
                </div>
            </div>
            <div className={s.side}>
                <div className={s.flex}>
                    <div className={s.code}>
                        <p className={s.name}>Код:</p>
                        <p className={s.value}>{props.code}</p>
                    </div>
                    <div className={s.time}>
                        <p className={s.name}>Ак. часы: </p>
                        <p className={s.value}>{props.time}</p>
                    </div>
                </div>
                <div className={s.autors}>
                    <p className={s.name}>Авторы: </p>
                    <p className={s.value}></p>
                </div>
                <div className={s.students}>
                    <p className={s.name}>Макс. кол-во обучающихся: </p>
                    <p className={s.value}>{props.studentsCount}</p>
                </div>
            </div>
        </div>
    );
}

export default CourseDescription;
