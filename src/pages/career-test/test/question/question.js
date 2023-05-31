import RadioButton from "../../../ui-elements/radiobutton/RadioButton";
import s from './question.module.css';
import {Route} from "react-router-dom";

const Question = (props) => {
    return(

            <div>
                <p className={s.head}>{props.questionName}</p>
                <div className={s.answers}>
                    <div className={s.answer}>
                        <RadioButton id={1} size='large' title={props.var1} name='answer'/>
                    </div>
                    <div className={s.answer}>
                        <RadioButton id={2} size='large' title={props.var2} name='answer'/>
                    </div>
                    <div className={s.answer}>
                        <RadioButton id={3} size='large' title={props.var3} name='answer'/>
                    </div>
                </div>
            </div>

    );
}

export default Question;
