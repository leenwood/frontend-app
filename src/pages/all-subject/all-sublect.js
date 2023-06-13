import Subject from "../ui-elements/one-subject/one-subject";
import Styles from "./allSubjects.module.css"
import { NUMBER_SEMESTER } from "./subjects.data";

function Subjects() {
    return <div className={Styles.all_subject}><div className={Styles.container__subjects}>
        {NUMBER_SEMESTER.map((number) => (
            <div className={Styles.row_subjects}>
                <h1 className={Styles.number_semester}>{number}</h1>
                <Subject subject_name='Философия' subject_type='humanitarian' title_subject="Философия. Курс для начинающих." teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
                <Subject subject_name='Векторный анализ' subject_type='math' title_subject="Основы векторного анализа" teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
                <Subject subject_name='Основы С++' subject_type='programming' title_subject="Основы применения языка программирования С++ " teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
                <Subject subject_name='Цифровая медицина' subject_type='humanitarian' title_subject="Цифровая медицина. Реалии XXI века." teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
                <Subject subject_name='Бизнес-анализ' subject_type='analytical' title_subject="Бизнес-анализ в масштабируемых системах" teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
                <Subject subject_name='Физика' subject_type='natural' title_subject="Физика магических взаимодействий" teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
                <Subject subject_name='Микроконтроллеры AVR' subject_type='programming' title_subject="Программирование микроконтроллеров AVR" teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
                <Subject subject_name='Ителлектуальный анализ данных' subject_type='analytical' title_subject="Интеллектуальный анализ данных" teatcher_name="Иванов И. И." time_count="30 часов" author_courses="Курс разработан ИтМО" />
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