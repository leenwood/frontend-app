import styles from './types-list-item.module.css';
import fontStyles from '../../../font-styles.module.css';
import { useState } from 'react';

const TypesListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    // props.isRecommended
    //     ? `${styles.open} ${styles.recommended}`
    //     : isOpen
    //         ? styles.open
    //         : ''

    return (
        // <li className={`${styles.listItem}
        //                 ${isOpen ? styles.open : ''}
        //                 ${props.isRecommended ? styles.recommended : ''}`}>
        <li className={`${styles.listItem} 
                        ${props.isRecommended
                            ? `${styles.open} ${styles.recommended}`
                            : isOpen
                                ? styles.open
                                : ''}`}>
            <header className={styles.header}>
                <h2 className={fontStyles.secondaryHeader}>{props.header}</h2>
                <div className={styles.openBtnWrapper}>
                    <span onClick={() => {setIsOpen(!isOpen)}}></span>
                </div>
            </header>
            <p className={fontStyles.default}>{props.description}</p>
        </li>
    )
};

export default TypesListItem;
