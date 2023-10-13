/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}

function isWeekend(day: string): boolean {
  return day === "Saturday" || day === "Sunday" ? true : false;
}

// console.log(isWeekend(Days.Sat));
