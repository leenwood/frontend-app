import styles from './interests-list-item.module.css';
import fontStyles from '../../../font-styles.module.css';
import Bar from "./bar/bar";
import {useState} from "react";

const InterestsListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onHoverHandle = () => {
        setIsOpen(!isOpen);
        props.handleDesc(props.description);
    }

    return (
        <>
            <li className={`${styles.item} ${isOpen ? styles.open : ''}`}
                onMouseEnter={onHoverHandle}
                onMouseLeave={onHoverHandle}>
                <h3 className={fontStyles.default}>{props.title}</h3>
                <Bar percents={props.percents}/>
                <div className={styles.wrapper}>
                    <div className={styles.pointer}>
                        <div></div>
                    </div>
                </div>
            </li>
        </>
    )
};

export default InterestsListItem;
