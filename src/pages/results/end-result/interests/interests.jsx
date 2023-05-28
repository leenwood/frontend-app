import styles from './interests.module.css';
import fontStyles from '../../font-styles.module.css';
import {useState} from "react";
import InterestsListItem from "./interests-list-item/interests-list-item";

const datasets = {
    subject: {
        title: 'Интересы к предметам',
        interestsList: [
            'Образы и визуализация',
            'Текст и языки',
            'Система и механизмы',
            'Люди и взаимодействие',
            'Числа и вычисления',
        ],
    },
    profession: {
        title: 'Профессиональные интересы',
        interestsList: [
            'Структурирование и контроль',
            'Исследование и анализ',
            'Продвижение',
            'Организация и управление',
            'Разработка и создание нового',
        ],
    },
}

const Interests = (props) => {
    const [description, setDesc] = useState('');

    const handleDesc = (newDesc) => {
        setDesc(newDesc);
    }

    const currentType = datasets[props.type];
    return (
        <section className={styles.interests}>
            <h2 className={`${fontStyles.secondaryHeader} ${styles.title}`}>{currentType.title}</h2>
            <div className={styles.wrapper}>
                <ul>
                    <InterestsListItem title={currentType.interestsList[0]} percents={props.listData[0]} description={props.description[0]} handleDesc={handleDesc}/>
                    <InterestsListItem title={currentType.interestsList[1]} percents={props.listData[1]} description={props.description[1]} handleDesc={handleDesc}/>
                    <InterestsListItem title={currentType.interestsList[2]} percents={props.listData[2]} description={props.description[2]} handleDesc={handleDesc}/>
                    <InterestsListItem title={currentType.interestsList[3]} percents={props.listData[3]} description={props.description[3]} handleDesc={handleDesc}/>
                    <InterestsListItem title={currentType.interestsList[4]} percents={props.listData[4]} description={props.description[4]} handleDesc={handleDesc}/>
                </ul>
                <p>{description}</p>
            </div>
        </section>
    )
};

export default Interests;
