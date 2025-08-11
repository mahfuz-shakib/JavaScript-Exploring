// miles to kilometres
// 1 miles = 1.60934 kilometres

function milesToKm(miles)
{
    const kilometers = miles * 1.60934;
    return kilometers;
}
const miles = 13;
const kilometers = milesToKm(miles);
console.log(kilometers +' km');


// kilometers to miles
// 1 km = 0.621371 miles

function kmToMiles(km)
{
    const mile = km * 0.621371;
    return mile;
}
const km = 13;
const mile = kmToMiles(km);
console.log(mile +' mile');
