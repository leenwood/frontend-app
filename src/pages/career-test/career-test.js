import s from './career-test.module.css';
import Button from "../ui-elements/button/Button";
import back1 from "../../img/career-test/back-1.svg"
import back2 from "../../img/career-test/back-2.svg"
import back3 from "../../img/career-test/back-3.svg"
import back4 from "../../img/career-test/back-4.svg"
import {Link} from "react-router-dom";
const CareerTest = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <p className={s.head}>Пройдите тест и узнайте, какая IT-профессия вам подходит</p>
                <p className={s.description}>Вашему вниманию предлагается тест на профориентацию в сфере IT. Тест представлен в виде нескольких вопросов, связанных с возможными интересами тестируемого в сфере IT.</p>
                <Link to='/test' className={s.button}>
                    <Button size='extraLarge' title='Пройти тест'/>
                </Link>
            </div>
        </div>
    );
}


export default CareerTest;
