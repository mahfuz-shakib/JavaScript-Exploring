const str = 'I am learning wev dev.'
let rev='';
// don //
// d+'' = d
// o+d => od
// n+od => nod
// for(const ch of str)
// {
//     rev=ch+rev;
// }
// console.log(rev);

// const reversed=str.reverse(); //js string not support reverse directly
// so have to first convert to array

// const reversed =str.split();               // [ 'I am learning wev dev.' ]
// const reversed =str.split('');             // [ 'I', ' ', 'a', 'm', ' ', 'l', 'e', 'a', 'r', 'n', 'i', 'n', 'g', ' ', 'w', 'e', 'v', ' ', 'd', 'e', 'v', '.' ]
// const reversed =str.split('').reverse();   // [ '.', 'v', 'e', 'd', ' ', 'v', 'e', 'w', ' ', 'g', 'n', 'i', 'n', 'r', 'a', 'e', 'l', ' ', 'm', 'a',' ', 'I' ]   
// const reversed =str.split('').reverse().join();         // .,v,e,d, ,v,e,w, ,g,n,i,n,r,a,e,l, ,m,a, ,I

const reversed =str.split('').reverse().join('');    
console.log(reversed);   // // .ved vew gninrael ma I      


 