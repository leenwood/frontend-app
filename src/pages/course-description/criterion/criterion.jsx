import s from "./criterion.module.css"
const Criterion = (props) => {
    return(
        <div className={s.content}>
            <p>{props.description}</p>
            <img src={props.image} alt="folder"/>
        </div>
    );
}


export default Criterion;
