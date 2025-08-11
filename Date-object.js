console.log(new Date());    // 2025-08-11T20:27:06.493Z

let date = new Date();
console.log(date);          // 2025-08-11T20:27:06.482Z

/*-------- To get current Year ----------------------------------------------------------------- */
console.log(date.getFullYear());    // 2025
/*-------- To get current Date ----------------------------------------------------------------- */
console.log(date.getDate());        // 12  -----> tarikh

/*-------- To get current time ----------------------------------------------------------------- */
console.log(date.getTime());        // total seconds
console.log(date.getHours());       // current hours
console.log(date.getMinutes());     // current minutes
console.log(date.getSeconds());     // current seconds
const time = `Time-> ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(time);

/*-------- To get month ----------------------------------------------------------------- */
// Start from january
// month[0] = january, month[1] = february, ...... month[11] = december
console.log(date.getMonth());       // 7 (index of august)  ---> produces index by default.
console.log(date.getMonth() + 1);   // 8 (position of august)   --> added by 1
/*-----------------------------------------------------------------------------------------------*/

/*-------- To get day ----------------------------------------------------------------- */
// day starts from Sunday
// day[0] = Sunday(0), day[1] = Monday ... day[6] = Saturday

console.log(date.getDay()); // 2 (index of Tuesday)
console.log(date.getDay() + 1); // 3 (position of Tuesday)