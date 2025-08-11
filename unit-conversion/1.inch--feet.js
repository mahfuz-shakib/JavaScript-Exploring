// inch to feet

// function inchToFeet(inch)
// {
//     const feet = inch/12;
//     return feet;
// }

// const showHeight = inchToFeet(75);
// console.log(showHeight);

function inchToFeet2(inch){
    const feet = parseInt(inch / 12);
    const extraInches = inch % 12;
    // return `${feet} feet and ${extraInches} inches`;
    return feet + ' feet and ' + extraInches + ' inches';
}

const showHeight2 = inchToFeet2(84);
console.log(showHeight2);


