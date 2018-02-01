export const changeTimeFormat = (timestamp: number) : string => {
    // Create a new JavaScript Date object based on the timestamp milliseconds
    const date : Date = new Date(timestamp);
    // Days part from the timestamp
    const days: number = date.getDate();
    // Months part from the timestamp
    const getMonth: number = date.getMonth();
    const months: string = `0${(getMonth + 1)}`;
    // Years part from the timestamp
    const years = date.getFullYear();
    // Will display date in YYYY/MM/DD format
    const formattedTime = `${years} / ${months.substr(-2)} / ${days}`;
    return formattedTime;
  };
  
  export const toTimeStamp = (dateString: string) : number => {
    // return into millisecond timestamp a date
    return Math.round(new Date(`${dateString} 00:00:00`).getTime());
  };