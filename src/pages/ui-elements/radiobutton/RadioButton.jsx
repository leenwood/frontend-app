import React from "react";
import styles from './radiobutton.module.css';


const RadioButton = (props) =>

    <div>
        <input id={props.id} type="radio" name={props.name} value={props.value}/>
        <label className={`${styles.darkTheme} ${props.size === 'medium' ? styles.medium : styles.large}`} htmlFor={props.id}>{props.title}</label>
    </div>

export default RadioButton;
