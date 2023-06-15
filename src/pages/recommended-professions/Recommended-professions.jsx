import styles from './recommended-professions.module.css';
import fontStyles from '../results/font-styles.module.css';
import ProfessionCard from "../results/end-result/profession-card/profession-card";

const RecommendedProfessions = ({ cardsData }) => {
    const cards = cardsData.map((cardData) => <li><ProfessionCard name={cardData.name} date={cardData.date}/></li>);

    return (
        <main className={styles.main}>
            <h1 className={`${fontStyles.header} ${styles.header}`}>Рекомендуемые профессии</h1>
            <ul className={styles.cardsList}>{cards}</ul>
        </main>
    )
}

export default RecommendedProfessions;
