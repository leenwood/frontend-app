import background from "../../img/reg_background.svg";
import Button from "../ui-elements/button/Button";
import { useRef } from "react";
import {useForm} from "react-hook-form";
import styles from "./regestration.module.css";


function Image() {
	return (
		<img src={background} alt="altImage" />
	);
}

function MergeButtonText() {
	return <div className={styles.container__button_text}>
		<Button title="Регистрация" size="extraLarge"/>
		<p>У вас уже есть учётная запись? <a href="/register">Войти</a></p>
	</div>
}

function RegestrationForm() {
	const {register, handleSubmit, watch, formState: {errors}} = useForm();
	const onSubmit = (d) => alert(JSON.stringify(d));
	const password = useRef({});
	password.currrent = watch("password", "");
	return <form onSubmit={handleSubmit(onSubmit)} className={styles.form__input}>
		<h2 className={styles.header__form}>Создать учётную запиcь</h2>
		<div className={styles.container__nameLastname}>
			<label className={styles.label}>Фамилия
				<input className={styles.lastName} type="text" placeholder="Введите фамилию" {...register("lastName", {required: true, maxLength: 80})}/>
				{errors?.lastName?.type === 'required' && <p className={styles.error}>Введите данные</p>}
			</label>
			<label className={styles.label}>Имя
				<input className={styles.name} type="text" placeholder="Введите имя" {...register("firstName", {required: true, maxLength: 80})}/>
				{errors?.firstName?.type === 'required' && <p className={styles.error}>Введите данные</p>}
			</label>
		</div>
		<label className={styles.label}>Отчество
			<input className={styles.input} type="text" placeholder="Введите отчество" {...register("fatherName", {required: true, maxLength: 80})}/>
			{errors?.fatherName?.type === 'required' && <p className={styles.error}>Введите данные</p>}
		</label>
		<label className={styles.label}>E-mail
			<input className={styles.input} type="email" placeholder="Введите email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
			{errors?.email?.type === 'required' && <p className={styles.error}>Введите данные</p>}
			{errors?.email?.type === 'pattern' && <p className={styles.error}>Не правильно введён email</p>}
		</label>
		<label className={styles.label}>Пароль
			<input className={styles.input} name="password" type="password" placeholder="Введите пароль" {...register("password", {required: true, minLength: 8})}/>
			<p className={styles.passwordControl}></p>
			{errors?.password?.type === 'required' && <p className={styles.error}>Введите данные</p>}
		</label>
		<label className={styles.label}>Повторите пароль
			<input className={styles.input} type="password" placeholder="Введите пароль" {...register("password_repeat", {required: true, minLength: 8})}/>
			<p className={styles.passwordControl}></p>
			{errors?.password_repeat?.type === 'required' && <p className={styles.error}>Введите данные</p>}

		</label>
		<MergeButtonText /> 
	</form>

}

function Merge() {
	return <>
	<Image />
	<RegestrationForm />
	</>;
}


function App() {
	return <div className={styles.flex}>
		<Merge />
	</div>
}

export default App;
