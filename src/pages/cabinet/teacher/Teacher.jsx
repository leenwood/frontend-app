import s from "./Teacher.module.css";
import avatar from "../../../img/obabkov.jpg";
const Teacher = (props) => {
    return(
        <div className={s.content}>
            <div className={s.avatar}>
                <img src={avatar} />
            </div>
            <div className={s.information}>
                <p className={s.name}>{props.name}</p>
                <p className={s.position}>{props.position}</p>
                <div className={s.itemsWrapper}>
                    <div className={s.items}>
                        <p className={s.item}>Адрес:</p>
                        <p className={s.item}>Аудитория:</p>
                        <p className={s.item}>Телефон:</p>
                        <p className={s.item}>Email:</p>
                    </div>
                    <div className={s.itemsValues}>
                        <p className={s.itemValue}>{props.address}</p>
                        <p className={s.itemValue}>{props.classroom}</p>
                        <p className={s.itemValue}>{props.phone}</p>
                        <p className={s.itemValue}>{props.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacher;
