import React from "react";
import styles from './checkbox.module.css';

const Checkbox = (props) =>
    <div>
        <input id={props.id} type="checkbox" name={props.name}/>
        <label className={`${styles.lightTheme} ${props.size === 'medium' ? styles.medium : styles.large}`} htmlFor={props.id}>{props.title}</label>
    </div>

export default Checkbox;
