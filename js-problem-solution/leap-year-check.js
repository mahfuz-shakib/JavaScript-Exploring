// Checking whether a year is Leap Year or not

//using consitional statement
function isLeapYear(year)
{
    if(year % 400 == 0)
        return 'Leap Year';
    else if( year % 4 === 0 && year % 100)
        return 'Leap Year';
    else 
        return 'Not Leap Year';
}
const year = 2030;      
console.log(isLeapYear(year));


//using ternary operator
const y = 2024;
isItLeapYear = (y%400==0) ? 'YES' : (y%4==0 && y%100) ? 'YES' : 'NO';
console.log(isItLeapYear);