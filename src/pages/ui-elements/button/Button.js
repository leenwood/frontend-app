import '../../../styles/buttons.css';
import '../../../styles/index.css';


function Button () {
    return <div>
        <div className="container--light">
            <button className="extra--large light--theme">Подробнее</button>
            <button disabled className="large light--theme">Подробнее</button>
            <button className="medium light--theme">Подробнее</button>
            <button className="small light--theme">Подробнее</button>
            <button className="extra--small light--theme">Подробнее</button>
        </div>
        <div className="container--dark">
            <button className="extra--large dark--theme">Подробнее</button>
            <button disabled className="large dark--theme">Подробнее</button>
            <button className="medium dark--theme">Подробнее</button>
            <button className="small dark--theme">Подробнее</button>
            <button className="extra--small dark--theme">Подробнее</button>
        </div>
    </div>
}

export default Button;
