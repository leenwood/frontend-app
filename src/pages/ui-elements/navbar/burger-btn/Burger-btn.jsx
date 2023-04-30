import styles from './burger-btn.module.css'

const BurgerBtn = () => {
    return (
        <button className={styles.headerBurgerBtn}>
            <div className={styles.wrapper}>
                <span></span><span></span><span></span>
            </div>
        </button>
    )
}

export default BurgerBtn;
