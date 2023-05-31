import {useState} from "react";
import styles from './navbar.module.css';
import stylesNav from './navbar-item/navbarItem.module.css';
import BurgerBtn from "./burger-btn/Burger-btn";
import NavbarItem from "./navbar-item/NavbarItem";
import homeIcon from '../../../img/icons/home.svg'
import accountIcon from '../../../img/icons/account.svg'
import iotIcon from '../../../img/icons/iot.svg'
import recsIcon from '../../../img/icons/recs.svg'
import testIcon from '../../../img/icons/test.svg'
import trajectoryIcon from '../../../img/icons/trajectory.svg'
import {Link, Outlet} from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={`${styles.mainNav} ${isOpen ? styles.open : ''}`}
                 onMouseEnter={() => setIsOpen(true)}
                 onMouseLeave={() => setIsOpen(false)}>
                <ul className={`${styles.navList}`}>
                    <li className={stylesNav.navbarItem}>
                        <NavbarItem name={isOpen ? "Главная страница" : ""} link="/" iconUrl={homeIcon} />
                    </li>
                    <li className={stylesNav.navbarItem}>
                        <NavbarItem name={isOpen ? "Личный кабинет" : ""} items={
                            [
                                { name: 'Мое направление', link: '/directions' },
                                { name: 'Пройденные курсы', link: '#' },
                            ]
                        } iconUrl={accountIcon}/>
                    </li>
                    <li className={stylesNav.navbarItem}>
                        <NavbarItem name={isOpen ? "ИОТ" : ""} items={
                            [
                                { name: 'Все курсы ИОТ', link: '/cards' },
                                { name: 'Рекомендованные траектории', link: '/cards' },
                                { name: 'Курсы в рамках направления', link: '/cards' },
                            ]
                        } iconUrl={iotIcon}/>
                    </li>
                    <li className={stylesNav.navbarItem}>
                        <NavbarItem name={isOpen ? "Построение траектории" : ""} link="/trajectoryGeneration" iconUrl={trajectoryIcon}/>
                    </li>
                    <li className={stylesNav.navbarItem}>
                        <NavbarItem name={isOpen ? "Профессии" : ""} items={
                            [
                                { name: 'Библиотека профессий', link: '#' },
                                { name: 'Рекомендуемые профессии', link: '#' },
                            ]
                        } iconUrl={recsIcon}/>
                    </li>
                    <li className={stylesNav.navbarItem}>
                        <NavbarItem name={isOpen ? "Тест на профориентацию" : ""} link="/career_test" iconUrl={testIcon}/>
                    </li>
                </ul>
            </nav>
            <div className="outlet">
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;
