import s from "./Directions.module.css";
import Teacher from "./teacher/Teacher";
import Descriptions from "./descriptions/Descriptions";

const Directions = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.mainContent}>
                <Descriptions name='Иванов Иван Васильевич' card={90473894} group='РИ-222222'
                email='kkk@mail.ru' direction='Программная инженерия'/>
                <div className={s.teachers}>
                    <Teacher name='Обабков Илья Николавич' position='Руководитель образовательной программы'
                             address='ул., Мира, 32' classroom='Р-332' phone='(343) 375-97-00' email='i.n.obabkov@urfu.ru'/>
                    <Teacher name='Обабков Илья Николавич' position='Руководитель образовательной программы'
                             address='ул., Мира, 32' classroom='Р-332' phone='(343) 375-97-00' email='i.n.obabkov@urfu.ru'/>
                    <Teacher name='Обабков Илья Николавич' position='Руководитель образовательной программы'
                             address='ул., Мира, 32' classroom='Р-332' phone='(343) 375-97-00' email='i.n.obabkov@urfu.ru'/>
                    <Teacher name='Обабков Илья Николавич' position='Руководитель образовательной программы'
                             address='ул., Мира, 32' classroom='Р-332' phone='(343) 375-97-00' email='romanlabzin03@gmail.com'/>

                </div>
            </div>
        </div>

    );
}

export default Directions;
