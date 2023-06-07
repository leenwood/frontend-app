import styles from './intermediate-result.module.css';
import fontStyles from '../font-styles.module.css';
import TypesList from "./types-list/types-list";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from "react-chartjs-2";
import Button from "../../ui-elements/button/Button";
import {useNavigate} from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const setChartData = (data) => {
    return {
        labels: [
            'Человек-художественный образ',
            'Человек-природа',
            'Человек-человек',
            'Человек-знаковая система',
            'Человек-техника'
        ],
        datasets: [
            {
                data: data,
                backgroundColor: [
                    '#CA9EFF',
                    '#99E5B2',
                    '#FFC5BD',
                    '#FFDF80',
                    '#66BFFF',
                ],
            },
        ],
    };
};

const chartOptions = {
    responsive: false,
    cutout: '80%',
    offset: 1,
    rotation: 20,
    plugins: {
        legend: {
            maxHeight: 800,
            maxWidth: 395,
            position: 'bottom',
            align: 'start',
            labels: {
                padding: 60,
                textAlign: 'center',
                font: {
                    size: 16,
                    textAlign: 'center',
                    weight: '500',
                    family: "'Montserrat', sans-serif"
                },
                boxHeight: 50,
                boxWidth: 50,
            }
        }
    },
}

const IntermediateResult = (props) => {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/endresult');
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.resultWrapper}>
                    <h1 className={fontStyles.header}>Промежуточный результат</h1>
                    <p className={fontStyles.default}>Анализ ваших интересов показал, что вам ближе тип:</p>
                    <TypesList/>
                </div>
                <div className={styles.chartWrapper}>
                    <div onClick={routeChange}>
                        <Button size={'extraLarge'} title={'Далее'}/>
                    </div>
                    <Doughnut data={setChartData(props.data)}
                              options={chartOptions} height={800} width={500}/>
                </div>
            </main>
        </>
    )
};

export default IntermediateResult;
