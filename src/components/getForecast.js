
const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const nameOfMonths = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

      const date = new Date();
      
  let weekDay = date.getDay();
  export const today = daysOfWeek[date.getDay()];
  const finalWeek = [];
export   const finalMonth = [];

  for (let i = 0; i <= 3; i++) {
    weekDay = (weekDay + 1) % 7;
    finalWeek[i] = daysOfWeek[weekDay];
  }
  
  const firstDayy = daysOfWeek[weekDay];
  export const secondDayy = finalWeek[0];
  export const thirdDayy = finalWeek[1];
  export const fourthDayy = finalWeek[2];
  function halfDate(first, second) {
    return first + ' ' + second;
  }
  export const currentMonth = halfDate(date.getDate(), nameOfMonths[date.getMonth()]);
  
  for (let i = 0; i < 4; i++) {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + i + 1);
  
    const monthName = nameOfMonths[nextDate.getMonth()];
    const dateName = nextDate.getDate();
  
    const formattedDate = halfDate(dateName, monthName);
    finalMonth[i] = formattedDate;
}

const monthName = nameOfMonths[date.getMonth()];
  const dateName = date.getDate();
  halfDate(dateName, monthName);
  
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);
  
  