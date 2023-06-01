import styles from './end-result.module.css';
import fontStyles from '../font-styles.module.css';
import Interests from "./interests/interests";
import ProfessionCard from "./profession-card/profession-card";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from "react-chartjs-2";
import Button from "../../ui-elements/button/Button";
import {useNavigate} from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const setChartData = (data) => {
    return {
        labels: [
            'Математика',
            'Гуманитарные предметы',
            'Естественно-научные предметы',
            'Программирование',
            'Аналитические предметы'
        ],
        datasets: [
            {
                label: '',
                data: data,
                backgroundColor: [
                    '#FFDF80',
                    '#66BFFF',
                    '#CA9EFF',
                    '#99E5B2',
                    '#FFC5BD',
                ],
                borderRadius: 15,
                borderWidth: 1,
            },
        ],
    };
};

const chartOptions = {
    responsive: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    },
}

const EndResult = (props) => {
    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/#');
    };

    return (
        <>
            <main className={styles.main}>
                <header className={styles.header}>
                    <div>
                        <h1 className={fontStyles.header}>Результаты тестирования</h1>
                        <p className={fontStyles.default}>Тест показал, с чем и как вам больше нравится работать.</p>
                    </div>
                    <button onClick={routeChange}>Построить траекторию</button>
                </header>
                <Interests type={'subject'}
                           listData={props.subject.data}
                           description={props.subject.description}/>
                <Interests type={'profession'}
                           listData={props.profession.data}
                           description={props.profession.description}/>
                <section>
                    <h2 className={fontStyles.secondaryHeader}>Тип карьеры</h2>
                    <div className={styles.chartWrapper}>
                        <Bar data={setChartData(props.chartData)} options={chartOptions} width={1025} height={300}/>
                        <p className={fontStyles.default}>{props.chartDescription}</p>
                    </div>
                </section>
                <section>
                    <h2 className={fontStyles.secondaryHeader}>Профессии, которые вам подходят или находятся на стыке интересов</h2>
                    <ul className={styles.professionCardsList}>
                        <ProfessionCard name={'Веб-разработчик'} coincidence={64}/>
                        <ProfessionCard name={'Бизнес-аналитик'} coincidence={62}/>
                        <ProfessionCard name={'Инженер по тестированию'} coincidence={61}/>
                        <ProfessionCard name={'IOS-разработчик'} coincidence={60}/>
                    </ul>
                </section>
            </main>
            <footer className={styles.mainFooter}>
                <div onClick={routeChange}>
                    <Button size={'extraLarge'} title={'Назад'}/>
                </div>
                <div onClick={routeChange}>
                    <Button size={'extraLarge'} title={'Пройти заново'}/>
                </div>
            </footer>
        </>
    )
};

export default EndResult;
