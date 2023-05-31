
import "./teachers-block.css";


function TeachersBlock(props) {
   return <div className="teacher__container">
            <input className="priority_number">{props.number}</input>
            <div>{props.title}</div>
        </div>
;
}

export default TeachersBlock;