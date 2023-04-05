import React from "react";
import styles from './radiobutton.module.css';


const RadioButton = (props) =>
    <div>
        <input id={props.id} type="radio" name={props.name}/>
        <label className={`${styles.lightTheme} ${props.size === 'medium' ? styles.medium : styles.large}`} htmlFor={props.id}>Label</label>
    </div>

export default RadioButton;
