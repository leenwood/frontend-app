import "./regestration.modules.css";
import background from "../../img/reg_background.svg";
import Button from "../ui-elements/button/Button";
import { useRef } from "react";
import {useForm} from "react-hook-form";


function Image() {
	return (
		<img src={background} alt="altImage" />
	);
}

function MergeButtonText() {
	return <div className="container__button_text">
		<Button title="Регистрация" size="extraLarge"/>
		<p>У вас уже есть учётная запись? <a href="#">Войти</a></p>
	</div>
}

function RegestrationForm() {
	const {register, handleSubmit, watch, formState: {errors}} = useForm();
	const onSubmit = (d) => alert(JSON.stringify(d));
	const password = useRef({});
	password.currrent = watch("password", "");
	return <form onSubmit={handleSubmit(onSubmit)} className="form__input">
		<h2 className="header__form">Создать учётную запиcь</h2>
		<div className="container__nameLastname flex">
			<label>Фамилия
				<input className="lastName" type="text" placeholder="Введите фамилию" {...register("lastName", {required: true, maxLength: 80})}/>
				{errors?.lastName?.type === 'required' && <p className="error">Введите данные</p>}
			</label>
			<label>Имя
				<input className="name" type="text" placeholder="Введите имя" {...register("firstName", {required: true, maxLength: 80})}/>
				{errors?.firstName?.type === 'required' && <p className="error">Введите данные</p>}
			</label>
		</div>
		<label>Отчество
			<input type="text" placeholder="Введите отчество" {...register("fatherName", {required: true, maxLength: 80})}/>
			{errors?.fatherName?.type === 'required' && <p className="error">Введите данные</p>}
		</label>
		<label>E-mail
			<input type="email" placeholder="Введите email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
			{errors?.email?.type === 'required' && <p className="error">Введите данные</p>}
			{errors?.email?.type === 'pattern' && <p className="error">Не правильно введён email</p>}
		</label>
		<label>Пароль
			<input name="password" type="password" placeholder="Введите пароль" {...register("password", {required: true, minLength: 8})}/>
			{errors?.password?.type === 'required' && <p className="error">Введите данные</p>}
		</label>
		<label>Повторите пароль
			<input type="password" placeholder="Введите пароль" {...register("password_repeat", {required: true, minLength: 8})}/>
			{errors?.password_repeat?.type === 'required' && <p className="error">Введите данные</p>}

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
	return <div className="flex">
		<Merge />
	</div>
}

export default App;
