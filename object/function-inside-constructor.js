// function inside constructor
function Student(name, age, gpa,lang) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.lang = lang;
    this.display = function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gpa);
        console.log(this.lang);
        console.log(`Mother toungh : ${this.lang[0]}`);
    };
}
let student1 = new Student('Sami', 25, '3.54',['Bangla','English','Hindi']);
let student2 = new Student('Rami', 24, '3.50',['Bangla','English','Hindi']);
let student3 = new Student('Oami', 25, '3.62',['Bangla','English','Hindi']);
let student4 = new Student('Jami', 24, '3.23',['Bangla','English','Hindi']);

student1.display();
student3.display();