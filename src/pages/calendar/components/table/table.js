import {Row} from "../row/row"
import './table.css'
import {WEEK_DAYS, TIME_RANGES} from '../../calendar.data'

export function Table() {
    return (
        <table>
            <tbody>
                <tr className="days_week">
                    <td className="column_1">Неделя 1</td>
                    {WEEK_DAYS.map((weekDay) => (
                        <td key={weekDay}>{weekDay}</td>
                    ))}
                </tr>
                {
                   TIME_RANGES.map((timeRange, index) => <tr key={timeRange}><Row weekDays={WEEK_DAYS} timeRange={timeRange} number={`${index} пара`}/></tr>) 
                }
            </tbody>
        </table>
    )
}