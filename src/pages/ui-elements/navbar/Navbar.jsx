import {useState} from "react";
import styles from './navbar.module.css';
import BurgerBtn from "./burger-btn/Burger-btn";
import NavbarItem from "./navbar-item/NavbarItem";
import homeIcon from '../../../img/icons/home.svg'
import accountIcon from '../../../img/icons/account.svg'
import iotIcon from '../../../img/icons/iot.svg'
import recsIcon from '../../../img/icons/recs.svg'
import testIcon from '../../../img/icons/test.svg'
import trajectoryIcon from '../../../img/icons/trajectory.svg'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${styles.mainNav} ${isOpen ? styles.open : ''}`}
             onMouseEnter={() => setIsOpen(true)}
             onMouseLeave={() => setIsOpen(false)}>
            <div className={styles.burgerWrapper}>
                <BurgerBtn/>
            </div>
            <ul className={`${styles.navList}`}>
                <NavbarItem name="Главная страница" link="#" iconUrl={homeIcon}/>
                <NavbarItem name="Личный кабинет" items={
                    [
                        { name: 'Мое направление', link: '#' },
                        { name: 'Пройденные курсы', link: '#' },
                    ]
                } iconUrl={accountIcon}/>
                <NavbarItem name="ИОТ" items={
                    [
                        { name: 'Все курсы ИОТ', link: '#' },
                        { name: 'Рекомендованные траектории', link: '#' },
                        { name: 'Курсы в рамках направления', link: '#' },
                    ]
                } iconUrl={iotIcon}/>
                <NavbarItem name="Построение траектории" link="#" iconUrl={trajectoryIcon}/>
                <NavbarItem name="Профессии" items={
                    [
                        { name: 'Библиотека профессий', link: '#' },
                        { name: 'Рекомендуемые профессии', link: '#' },
                    ]
                } iconUrl={recsIcon}/>
                <NavbarItem name="Тест на профориентацию" link="#" iconUrl={testIcon}/>
            </ul>
        </nav>
    )
}

export default Navbar;
