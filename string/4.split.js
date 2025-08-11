// split()  ==> converted to array and entire string will be a single array element
// split('') ==> converted to array and each character will be individual array element
// split(' ') ==> converted to array and each word will be separated array element

const dept = 'Computer Science and Engineering';

// console.log(dept.split());      // [ 'Computer Science and Engineering' ]
// console.log(dept.split()[0]);   // Computer Science and Engineering

// console.log(dept.split(''));    // ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i','e', 'n', 'c', 'e', ' ', 'a','n', 'd', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i','n', 'g'] */
// console.log(dept.split('')[2]); // m

console.log(dept.split(' '));       // [ 'Computer', 'Science', 'and', 'Engineering' ]
console.log(dept.split(' ')[1]);    // Science <-- index 1


// const songit='amar sonar bangla';
// console.log(songit.split('a'));    // divide by a
// [ '', 'm', 'r son', 'r b', 'ngl', '' ]

// console.log(typeof dept); // string
// const temp = dept.split(' '); 
// console.log(typeof temp); // object/array
// console.log(temp[1]); // Science