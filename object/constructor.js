function Student(name, age, gpa,lang) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.lang = lang;
}
let student1 = new Student('Sami', 25, '3.54',['Bangla','English','Hindi']);
let student2 = new Student('Rami', 24, '3.50',['Bangla','English','Hindi']);
let student3 = new Student('Oami', 25, '3.62',['Bangla','English','Hindi']);
let student4 = new Student('Jami', 24, '3.23',['Bangla','English','Hindi']);
console.log(student1);
console.log(student2.name);
console.log(student3.lang);
console.log(student4.lang[1]);
