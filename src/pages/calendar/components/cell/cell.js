import {calendarData} from "../../calendar.data"
import "./cell.css"

function convertConvenceToClassName(convenience) {
    if (convenience === 1) {
        return "background__green"
    } 
    if (convenience === -1) {
        return "background__red"
    }
    return ""
}

export function Cell(props) {
    const state = calendarData.getValue(props.weekDay, props.timeRange)
    const handleClick = () => {
        calendarData.setValue(props.weekDay, props.timeRange, calendarData.currentConvenience)
    }
    return (<td onClick={handleClick} className={convertConvenceToClassName(state)}></td>)
}