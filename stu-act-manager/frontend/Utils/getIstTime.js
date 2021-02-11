

export const getISTTime = (givenDate) => {
    const date = new Date(givenDate);
    const offset = date.getTimezoneOffset() * 60 * 1000;
    const newDate = new Date(date.getTime() - offset)
    return newDate;
}