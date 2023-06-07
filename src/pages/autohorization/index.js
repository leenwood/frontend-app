import styles from "./register.module.css";
import background from "../../img/reg_background.svg";
import Button from "../ui-elements/button/Button";

function Image() {
    return (
        <img src={background} alt="altImage" />
    );
}

function MergeButtonText() {
    return <div className={styles.container__button_text}>
        <a href="/mainPage"><Button title="Регистрация" size="extraLarge" /></a>
        <p>У вас нет учётной записи? <a href="/registration">Зарегестрироваться</a></p>
    </div>
}

function LoginForm() {
    return <div className={styles.container__loginForm}>
        <h1 className={styles.header__loginForm}>Авторизация</h1>
        <form>
            <div className={styles.form__group}>
                <label className={styles.label}>Email
                    <input className={styles.input__loginForm} type="text" placeholder="Введите email или номер телефона"></input>
                    <p className={styles.loginControl}></p>
                </label>
                <label className={styles.label}>Пароль
                    <input className={styles.input__loginForm} type="password" placeholder="Введите пароль"></input>
                    <p className={styles.passwordControl}></p>

                </label>
            </div>
        </form>
        <MergeButtonText />
    </div>
}

function Register() {
    return <div className={styles.register}>
        <Image />
        <LoginForm />
    </div>
};

export default Register;