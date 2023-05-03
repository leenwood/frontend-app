import "./calendar-page.css";
import React, { useEffect, useState } from "react";
import Button from "../ui-elements/button/Button";
import { ChooseTimeConvenience } from "./components/choose-time-convenience";
import {Table} from "./components/table/table";
import {calendarData} from "./calendar.data";


export function App() {
    const [, setValueForRerender] = useState(Math.random())
    useEffect(() => {
        const rerenderCallback = () => {
            setValueForRerender(Math.random())
        }
        calendarData.subscribe(rerenderCallback)

        return () => {
            calendarData.unsubscribe()
        };
    }, [])

    const handleClickconvertToJSON = () => {
        const jsonData = calendarData.toJSON()

        fetch('http://localhost', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: jsonData
        })
            .then(response => console.log(response))
            .catch((error => {
                console.log('error', error);
            }));
    }

	return <div className="calendar__container">
        <div className="title__wrap">
		    Выделите время, когда&nbsp;бы вам хотелось и&nbsp;не&nbsp;хотелось посещать пары
        </div>
        <ChooseTimeConvenience />
        <Table />
        <div className="button__wrap" onClick={handleClickconvertToJSON}>
            <Button title="Сохранить" size="extraLarge" />
        </div>
	</div>
}
