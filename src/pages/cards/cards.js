import "./cards.css";
import Card from "../ui-elements/card/Card";

function App() {
	return <div className="cards">
        Рекомендуемые курсы по вашей ИОТ
        <div className="cards__container flex">
            <Card card_name="card_python" name="Веб-верстка Skillbox"/>
            <Card card_name="card_python" name="Программирование на языке Python"/>
            <Card card_name="card_analysis" name="Анализ данных и искуственный интеллект"/>
            <Card card_name="card_economic" name="Экономика управления и финансы"/>
            <Card card_name="card_terver" name="Теория вероятности и математическая статистика"/>
        </div>
	</div>
}

export default App;
