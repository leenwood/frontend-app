import "./regestration.modules.css"
import Button from "../ui-elements/button/Button"
import { useEffect, useRef, useState } from "react";
import {useForm} from "react-hook-form";


function Image() {
	return (
		<svg className="background"
      width="970"
      height="1080"
      viewBox="0 0 970 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H970L643 540L950.5 1080H0V0Z" fill="#2B4A52" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M390.005 440.279C411.659 456.524 427.891 479.547 435.515 506.171L436.292 508.891L401.715 493.701L401.497 493.303C392.909 477.638 380.188 464.529 364.793 455.433C349.925 446.647 332.555 441.601 313.999 441.601C295.441 441.601 278.071 446.647 263.203 455.434C247.81 464.531 235.088 477.639 226.5 493.304L226.28 493.702C214.763 498.782 203.231 503.83 191.705 508.891L192.484 506.171C200.108 479.545 216.34 456.524 237.993 440.279C259.143 424.409 285.468 415 313.999 415C342.529 415 368.854 424.41 390.005 440.279Z"
        fill="#F9F9F9"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M314 665C383.035 665 439 609.334 439 540.665C439 534.556 438.549 528.552 437.693 522.678L410.344 510.663L325.734 473.493C322.044 471.872 318.031 471.044 314 471.044C309.822 471.044 305.852 471.921 302.262 473.498L217.656 510.665L190.307 522.678C189.45 528.551 189 534.556 189 540.665C189 609.334 244.964 665 314 665ZM373.192 582.663C373.192 601.291 346.691 616.391 314 616.391C281.309 616.391 254.808 601.291 254.808 582.663V559.366L302.262 580.211C305.852 581.787 309.822 582.664 314 582.664C318.031 582.664 322.044 581.838 325.734 580.216L373.192 559.367V582.663ZM414.388 530.214C414.747 533.649 414.929 537.135 414.929 540.665C414.929 596.111 369.741 641.057 314 641.057C258.257 641.057 213.071 596.111 213.071 540.665C213.071 537.135 213.253 533.649 213.612 530.212L302.262 569.154C305.852 570.731 309.822 571.609 314 571.609C318.031 571.609 322.044 570.782 325.734 569.16L371.334 549.128L318.483 521.961V521.96C316.25 521.005 314.686 518.8 314.686 516.229C314.686 512.786 317.492 509.995 320.953 509.995C322.152 509.995 323.272 510.329 324.225 510.911L386.021 542.676L414.388 530.214Z"
        fill="#F9F9F9"
      />
    </svg>
	);
}

function FormInput(props) {
	return ( <div className="input__container">
		<label>{props.text}
			<input type={props.type} name={props.name} placeholder={props.value} onChange={props.onChange}/>
		</label>
		</div>
	)
}

function MergeNameLastname() {
	return <div className="container__namelastname flex">
		<FormInput text="Фамилия" type="text" name="lastnameInput" value="Введите фамилию" />
		<FormInput text="Имя" type="text" name="nameInput" value="Введите имя"/>
	</div>
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
	const [name, setName] = useState();
	const handleChangeName = (e) => {
		setName(e.target.value);
		console.log(e.target.value);
	};
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