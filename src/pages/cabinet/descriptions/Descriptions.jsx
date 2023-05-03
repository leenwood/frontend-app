import s from "./Descriptions.module.css";
import avatar from "../../../img/avatar.svg";

const Descriptions = (props) => {
    return (
        <div className={s.content}>
            <p className={s.title}>Моё направление</p>
            <div className={s.flex}>
                <div className={s.avatar}>
                    <img src={avatar} alt="Аватарка" />
                </div>
                <div className={s.information}>
                    <p className={s.name}>{props.name}</p>
                    <div className={s.itemsWrapper}>
                        <div className={s.itemsNames}>
                            <p className={s.itemName}>№ студенческого билета:</p>
                            <p className={s.itemName}>Группа:</p>
                            <p className={s.itemName}>Электронная почта:</p>
                            <p className={s.itemName}>Мое направление:</p>
                        </div>
                        <div className={s.items}>
                            <p className={s.item}>{props.card}</p>
                            <p className={s.item}>{props.group}</p>
                            <p className={s.item}>{props.email}</p>
                            <p className={s.item}>{props.direction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Descriptions;
