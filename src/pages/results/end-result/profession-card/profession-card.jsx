import styles from './profession-cards.module.css';
import fontStyles from '../../font-styles.module.css';
import Button from "../../../ui-elements/button/Button";
import {useNavigate} from "react-router-dom";

const ProfessionCard = (props) => {
    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/#');
    };

    return (
        <div className={styles.card}>
            <div className={styles.headerWrapper}>
                <h3 className={fontStyles.secondaryHeader}>{props.name}</h3>
            </div>
            <div className={styles.mainWrapper}>
                <div onClick={routeChange}>
                    <Button size={'extraLarge'} title={'Посмотреть'}/>
                </div>
                <p className={fontStyles.default}>Совпадение на {props.coincidence}%</p>
            </div>
        </div>
    )
}

export default ProfessionCard;
