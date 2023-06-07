import styles from "./mainStyle.module.css";
import Button from "../ui-elements/button/Button";
import { useNavigate, Link } from "react-router-dom";

function Header() {
    return <header className={styles.header}>
        <div className={styles.navigation}>
            <div className={styles.button__choose}>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4703 1.25969C19.7154 2.43038 19.4285 4.21734 18.8356 5.57887L18.8345 5.5812C17.936 7.63502 17.4419 9.88673 17.4603 12.2684L17.4603 12.2738C17.4969 21.1126 24.844 28.6532 33.8416 29.0212L33.8428 29.0213C35.1712 29.0766 36.441 28.9845 37.674 28.7638C38.4837 28.6163 39.2716 28.5915 39.9769 28.756C40.6959 28.9237 41.4101 29.3136 41.8527 30.0378C42.2934 30.759 42.3164 31.5691 42.1475 32.2799C41.9811 32.9801 41.6137 33.6715 41.1291 34.3281C36.8809 40.1404 29.8084 43.8208 21.9153 43.4786L21.9144 43.4785C10.713 42.9859 1.33949 34.0258 0.564078 22.9463C-0.144397 13.1248 5.6846 4.57099 14.1574 0.997844C15.5171 0.42196 17.272 0.132929 18.4703 1.25969ZM16.3406 3.4907C16.1404 3.49623 15.8041 3.55816 15.3258 3.76096L15.3232 3.76209C7.95649 6.86875 2.94567 14.2741 3.55641 22.7319L3.55666 22.7354C4.22208 32.2547 12.3277 40.0536 22.0453 40.4814M16.5013 3.50299C16.5012 3.50307 16.4995 3.50262 16.4965 3.50142C16.4998 3.50232 16.5013 3.50292 16.5013 3.50299ZM16.3406 3.4907C16.3287 3.66657 16.2685 3.95956 16.0856 4.37975C15.0248 6.80489 14.439 9.47191 14.4603 12.2888C14.5052 22.7688 23.1575 31.5868 33.719 32.0187C35.2695 32.0832 36.7586 31.9755 38.2048 31.7165L38.2096 31.7156C38.6884 31.6282 39.0128 31.6322 39.208 31.6612C39.148 31.8534 39.0068 32.1521 38.7138 32.5487L38.7091 32.5551C35.0373 37.5806 28.9113 40.7788 22.0462 40.4814M39.3908 31.708C39.3907 31.708 39.3898 31.7075 39.3882 31.7066L39.3908 31.708ZM39.2454 31.48C39.2452 31.4773 39.2452 31.4759 39.2453 31.4759C39.2453 31.4758 39.2454 31.4772 39.2454 31.48Z" fill="#2B4A52" />
                </svg>
            </div>

            <Link to="/register"><Button title="Войти" size="extraLarge" href="" onclick='javascript:location.href="/mainPage";' /></Link>
            <Link to="/registration"><Button title="Регистрация" size="extraLarge" /></Link>
        </div>
    </header>
}

function Content() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/career_test');
    };
    return <div className={styles.main__content}>
        <div className={styles.main__content_left}>
            <h1 className={styles.main__content_header}>
                UrFuture
            </h1>
            Наш сервис поможет вам в выборе будущей професии и подборе оптимальной образовательной траектории.
        </div>
        <div onClick={handleClick} className={styles.main__content_right}>
            <div>
                <div>Определить профессию будущего</div>
                <div className={styles.container__array}>&rarr;</div>
            </div>
        </div>
    </div>

}


function mainPage() {
    return <div className={styles.mainPage}>
        <Header />
        <Content />
    </div>
}

export default mainPage;
