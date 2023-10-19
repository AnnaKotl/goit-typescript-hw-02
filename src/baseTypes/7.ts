/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/


// Відповідь:

enum Days {
  Monday = "понеділок",
  Tuesday = "вівторок",
  Wednesday = "середа",
  Thursday = "четвер",
  Friday = "п'ятниця",
  Saturday = "субота",
  Sunday = "неділя",
}

function isWeekend(day: Days): boolean {
  return day === Days.Saturday || day === Days.Sunday;
}