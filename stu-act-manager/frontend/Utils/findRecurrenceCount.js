export const findRecurrenceCount = (event,daysCount) => {
    const recurrenceEnd = event.recurrence.range.endDate;
    const recurrenceEndDate = new Date(recurrenceEnd)
      const parsedDaysLeft = parseInt((Date.parse(recurrenceEndDate) - Date.parse(event.start.dateTime))/(8.64*10000000))
      const NoOfweeks = parsedDaysLeft/7;
      const daysToBeDeducted = parseInt(NoOfweeks * daysCount)
      return parsedDaysLeft-daysToBeDeducted;
}