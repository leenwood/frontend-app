import React from "react"
import './row.css'
import {WEEK_DAYS} from "../../calendar.data"
import {Cell} from "../cell/cell"

export function Row(props) {
    return (
        <>
            <td className="column_1"><div className="number">{props.number}</div>
            <div>{props.timeRange}</div></td>
            { WEEK_DAYS.map((weekDay) => (
                <Cell key={weekDay} weekDay={weekDay} timeRange={props.timeRange} />
                
            ))}
        </>
    )
}