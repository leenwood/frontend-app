
export const WEEK_DAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
export const TIME_RANGES = ["08:30 - 10:00", "10:15 - 11:45", "12:00 - 13:30", "14:15 - 15:45", "16:00 - 17:30", 
                        "17:45 - 19:10", "19:15 - 20:45", "20:50 - 22:20"]

class CalendarData {
    state = {};
    subscriptions = [];
    currentConvenience = 0;

    subscribe(callback) {
        this.subscriptions.push(callback)
    }

    unsubscribe() {
        this.subscriptions = []
    }

    _handleSubscriptions() {
        for (const subscription of this.subscriptions) {
            subscription()
        }
    }

    _resetState() {
        this.state = {}
        for (const weekDay of WEEK_DAYS) {
            this.state[weekDay] = {}
            for (const timeRange of TIME_RANGES) {
                this.state[weekDay][timeRange] = 0
            }
        }
        this.subscriptions = []
    }

    getValue(weekDay, timeRange) {
        return this.state[weekDay][timeRange]
    }

    setCurrentConvience(weekDay, timeRange) {
        this.setValue(weekDay, timeRange, this.currentConvenience)
    }

    setValue(weekDay, timeRange, value) {
        this.state[weekDay][timeRange] = value
        this._handleSubscriptions()
    }

    toJSON() {
        return JSON.stringify(calendarData.state)
    }

    constructor() {
        this._resetState()
    }
}

export const calendarData = new CalendarData();
