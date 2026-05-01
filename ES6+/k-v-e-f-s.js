const student = {
  name: "Sabbir",
  roll: 105,
  class: "Eleven",
  gpa: 4.75,
};
console.log(student);
console.log(Object.keys(student)); // property list
console.log(Object.values(student)); // value list
console.log(Object.entries(student)); // 2D array
const list = Object.entries(student);
console.log(typeof list); //object
console.log(list); // 2D array
console.log(list[0]); // ['name', 'Sabbir']
console.log(list[1]); // ['roll', 105]
console.log(list[0][0]); // name
console.log(list[2][1]); // Eleven

// Object.freeze(student);  // manipulation (add, delete, modify) not possible
// student.gpa=5.00;
// delete student.gpa;
// student.location='Dhaka';
// console.log(student);   // same as before, not updated

Object.seal(student)  // add, delete not possible, modification posible;
student.gpa=5.00; // updated
delete student.gpa;
student.location='Dhaka';
console.log(student); 