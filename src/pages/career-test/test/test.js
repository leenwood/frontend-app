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
            questCount: 1
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
        e.preventDefault();

        let currentQuestCount = this.state.questCount;

        if (currentQuestCount === 25) {
            return;
        }

        this.setState({
            questCount: currentQuestCount + 1
        })
    };


    resulting() {
        let currentQuestCount = this.state.questCount;

        if (currentQuestCount === 25) {
            return <Link to='/intermediateresult'>
                <Button size='extraLarge' title='Посмотреть результат'/>
            </Link>
        }
    }
    decreaseCount(e){
        e.preventDefault();

        let currentQuestCount = this.state.questCount;

        if (currentQuestCount === 1) {
            return;
        }

        this.setState({
            questCount: currentQuestCount - 1
        })
    };

    render() {
        return(
                <form>
                    <div className={s.content}>
                        {this.questionsArray[this.state.questCount - 1]}
                    </div>
                    <div className={s.counter}>
                        Вопрос {this.state.questCount} из 25
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
                    <div className={s.result}>
                        {this.resulting()}
                    </div>
                </form>

        );
    }
}

export default Test;
