import styles from './navbarsublist.module.css';
import NavbarSublistItem from "./navbar-sublist-item/NavbarSublistItem";

const NavbarSublist = (props) => {
    return (
        <ul className={`${styles.sublist}`}>
            {props.items.map(({name, link}) => (
                <NavbarSublistItem name={name} link={link}/>
            ))}
        </ul>
    )
};

export default NavbarSublist;
