import {useState} from "react";
import styles from './navbarItem.module.css';
import NavbarSublist from "./navbar-sublist/NavbarSublist";

const isLink = props => props === undefined;

const NavbarItem = (props) => {
    const [sublistIsOpen, setSublistIsOpen] = useState(false)

    if (isLink(props.items)) {
        return (
            <li className={styles.navbarItem}>
                <a href={props.link} className={styles.navbarItemLink}><img src={props.iconUrl} alt=""/> {props.name}</a>
            </li>
        );
    } else {
        return (
            <li className={`${styles.navbarItem} ${sublistIsOpen ? '' : styles.sublistIsHidden}`}
                onMouseEnter={() => setSublistIsOpen(true)}
                onMouseLeave={() => setSublistIsOpen(false)}>
                <div className={styles.titleWrapper}>
                    <img src={props.iconUrl} alt=""/>
                    <span>{props.name}</span>
                </div>
                <NavbarSublist items={props.items}/>
            </li>
        );
    }
}

export default NavbarItem;
