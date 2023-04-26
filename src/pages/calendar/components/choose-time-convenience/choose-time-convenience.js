import styles from "./choose-time-convience.module.css";
import {calendarData} from "../../calendar.data"

export function ChooseTimeConvenience(props) {
    const handleClickInconvenientTime = () => {
        calendarData.currentConvenience = -1
    }
    const handleClickConvenientTime = () => {
        calendarData.currentConvenience = 1
    }
    return <div className={styles["chooseColor__container"]}>
        <button className={`${styles.button__choose} ${styles.button_red}`} onClick={handleClickInconvenientTime}> Неудобное время</button> 
        <button className={`${styles.button__choose} ${styles.button_green}`} onClick={handleClickConvenientTime}>Удобное время</button> 
    </div>
}
