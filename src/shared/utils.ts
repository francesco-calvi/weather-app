function getDayOfWeek(number: number) {
  const days: any = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }
  return days[number];
}

 
/* 
 create a date from it's number
 
 then return a day object:
      1. id => position of day in the week ( 0 = today, 1 tomorrow, ecc... )
      2. formattedDate => yyyy/mm/dd ( used for the api calls )
      3. name => name of the day
*/
function getDateByNumber(index:number, dayInNumber: number, startDate: Date) {
  let date = new Date(startDate.setDate(dayInNumber));
  let formattedDate = date.toLocaleDateString("it-IT").split('/').reverse().join('/');
  
  return {
    id: index,
    formattedDate,
    name: getDayOfWeek(date.getDay()),        
  }
}

export function getWeek() {
  let startDate = new Date(); 
  let week = [];
  
  for (let i = 0; i < 7; i++) {
    let dayInNumber = i === 0 ? startDate.getDate() : startDate.getDate() + 1;       
    let day = getDateByNumber(i, dayInNumber, startDate);     
    week.push(day)
  }
  return week;
}