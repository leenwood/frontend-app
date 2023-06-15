import styles from './profession-cards.module.css';
import fontStyles from '../../font-styles.module.css';
import Button from "../../../ui-elements/button/Button";
import {useNavigate} from "react-router-dom";

const ProfessionCard = (props) => {
    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/#');
    };

    const subText = props.inResult
        ? <p className={fontStyles.default}>Совпадение на {props.coincidence}%</p>
        : <p className={fontStyles.default}>Пройден: {props.date}</p>

    return (
        <div className={styles.card}>
            <div className={styles.headerWrapper}>
                <h3 className={`${fontStyles.secondaryHeader} ${styles.secHeader}`}>{props.name}</h3>
            </div>
            <div className={styles.mainWrapper}>
                <div onClick={routeChange}>
                    <Button size={'extraLarge'} title={'Посмотреть'}/>
                </div>
                {subText}
            </div>
        </div>
    )
}

export default ProfessionCard;
