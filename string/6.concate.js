const first_name='Mahfuz';
const last_name='Shakib';
const full_name= first_name + ' ' + last_name;
console.log(full_name);         // Mahfuz Shakib

const name=first_name.concat(last_name);
console.log(name);              // MahfuzShakib
const name1=first_name.concat(' ').concat(last_name);
console.log(name1);             // Mahfuz Shakib
const name2=first_name.concat(' ', last_name);
console.log(name2)              // Mahfuz Shakib

console.log(first_name.concat('ur',' ', 'Rahman',' ', last_name));
//  Mahfuzur Rahman Shakib