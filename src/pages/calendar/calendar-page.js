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
        const fs = require('fs');
        const json = calendarData.toJSON()
        fs.writeFile('trajectory/data.json', json, err => {
            if (err) {
                console.error(err);
            } else {console.log("Yes")}
        })
        
        
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
