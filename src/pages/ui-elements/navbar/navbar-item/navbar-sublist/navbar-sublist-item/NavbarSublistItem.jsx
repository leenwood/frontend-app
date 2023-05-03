import styles from './navbarsublistitem.module.css';

const NavbarSublistItem = (props) => {
    return (
        <li className={styles.navbarSublistItem}>
            <a href={props.link}>{props.name}</a>
        </li>
    )
};

export default NavbarSublistItem
