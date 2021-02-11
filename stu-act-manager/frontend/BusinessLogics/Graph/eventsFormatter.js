import { getISTTime } from "../../Utils/getIstTime";

/**
 * 
 * TODO: RECURRENCE IS NOW SET ONLY FOR DAYS OF WEEK, HAVE TO SET FOR ALL OTHER POSSIBILITIES ALSO
 */

export const eventsFormatter = (events) => {
    console.log(events);
    const formattedEvents = events.map((event) => {
        if(event.recurrence)
            {
                const recurrenceDays = event.recurrence.pattern.daysOfWeek.map(day => (day.substr(0,2).toUpperCase()));

                return {
                    StartTime: getISTTime(event.start.dateTime),
                    EndTime: getISTTime(event.end.dateTime),
                    Subject: event.subject,          
                    Recurrence: true,
                    RecurrenceRule: `FREQ=${event.recurrence.pattern.type.toUpperCase()};INTERVAL=${event.recurrence.pattern.interval};BYDAY=${recurrenceDays.toString()}`
            }
        }
        return {
            StartTime: getISTTime(event.start.dateTime),
            EndTime: getISTTime(event.end.dateTime),
            Subject: event.subject
        }
        
    })
    return formattedEvents;

}