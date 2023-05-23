import styles from './intermediate-result.module.css';
import fontStyles from '../font-styles.module.css';
import TypesList from "./types-list/types-list";

const IntermediateResult = (props) => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.resultWrapper}>
                    <h1 className={fontStyles.header}>Промежуточный результат</h1>
                    <p className={fontStyles.default}>Анализ ваших интересов показал, что вам ближе тип:</p>
                    <TypesList/>
                </div>
                <div className={styles.chartWrapper}>
                    
                </div>
            </main>
        </>
    )
};

export default IntermediateResult;
