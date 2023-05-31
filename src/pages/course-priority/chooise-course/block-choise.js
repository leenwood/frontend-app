
import "./block.css";
import Checkbox from "../../ui-elements/checkbox/Checkbox";


function Block(props) {
   return <div className="block__container">
        <div className="block__container_left">
            <input className="priority_number">{props.number}</input>
            <div>{props.title}</div>
        </div>
        <div className="checkbox__container"><Checkbox id={props.id}/> </div> 
   </div>;
}

export default Block;