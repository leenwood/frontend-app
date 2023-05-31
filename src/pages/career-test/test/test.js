import s from "./test.module.css";
import RadioButton from "../../ui-elements/radiobutton/RadioButton";
import Button from "../../ui-elements/button/Button";
import {Component} from "react";
import store from '../state/store'
import Question from "./question/question";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questCount: 0,
            link: 1
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    questionsArray = store.questions.map((elem) =>
        <Question
            questionName={elem.questionName}
            var1={elem.var1}
            var2={elem.var2}
            var3={elem.var3}
        />
    )

    increaseCount(e)  {
        let currentQuestCount = this.state.questCount;

        this.setState({
            questCount: currentQuestCount + 1
        })

        e.preventDefault();
    };

    decreaseCount(e){
        let currentQuestCount = this.state.questCount;

        this.setState({
            questCount: currentQuestCount - 1
        })

        e.preventDefault();
    };

    render() {
        return(
                <form>
                    <div className={s.content}>
                        {this.questionsArray[this.state.questCount]}
                    </div>
                    <div className={s.counter}>
                        Вопрос {this.state.questCount + 1} из 25
                    </div>
                    <div className={s.flex}>
                        <div onClick={this.decreaseCount}>
                            <Button size='extraLarge' title='Назад'/>
                        </div>
                        <div className={s.progressBar}>
                            <div className={s.line} style={{
                                width: `${this.state.questCount * 4}%`,
                            }}>
                            </div>
                        </div>
                        <div onClick={this.increaseCount}>
                            <Button size='extraLarge' title='Далее'/>
                        </div>
                    </div>
                </form>
        );
    }
}

export default Test;
