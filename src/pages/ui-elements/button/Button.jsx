import React from "react";
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button className={`${styles.lightTheme} ${props.size === 'small' ? styles.small : ''} 
                            ${props.size === 'extraSmall' ? styles.extraSmall : ''} 
                            ${props.size === 'medium' ? styles.medium : ''} 
                            ${props.size === 'large' ? styles.large : ''} 
                            ${props.size === 'extraLarge' ? styles.extraLarge : ''}`}
                            disabled={props.disabled}>Кнопка</button>
    );
}

export default Button;
