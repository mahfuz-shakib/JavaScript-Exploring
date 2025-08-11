// backtics ` ` --- template literals

//----------------------------------------------------------------------------------

const myMsg = `hellooo dear bangladesh`;
console.log(myMsg);

//----------------------------------------------------------------------------------

// newline allowed just by enter
const myText = `Bangladesh is a South-Asian country
It established in 1971.
It got second freedom in August, 2024.
`
console.log(myText)

//----------------------------------------------------------------------------------

//used variables by ${my_variable}
console.log(`${myMsg} \nAbout bangladesh: ${myText}`);
