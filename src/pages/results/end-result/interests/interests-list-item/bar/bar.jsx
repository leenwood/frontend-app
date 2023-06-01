import styles from './bar.module.css';

const Bar = (props) => {
    const calculateWidth = (index) => {
        const percentsPerCell = 10;
        if (index * percentsPerCell <= props.percents) {
            return percentsPerCell;
        }

        if (index * percentsPerCell > props.percents) {
            const result = props.percents - (index - 1) * percentsPerCell;
            return result < percentsPerCell && result > 0 ? result : 0;
        }
    }

    let currentIndex = 0;

    return(
        <div className={styles.bar}>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
            <div className={styles.cell}>
                <div className={styles.inner} style={{width: `${calculateWidth(++currentIndex)}px` }}></div>
            </div>
        </div>
    )
};

export default Bar;
