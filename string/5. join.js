// must be array then try to join
// join()  ==> join with specific things
// join()  ==> join with comma(,) by default
// join('') ==> remove comma , just join
// join('-') ==> join with -
// join('|') ==> join with |

// const txt='hello how are you ?';
// console.log(txt.join('-'));      // error because txt is string now

// const text = 'hello how are you ?';
// const temp = text.split(' ') // converted to word-array
                            // [ 'hello', 'how', 'are', 'you', '?' ]
// console.log(temp.join());        // hello,how,are,you,?
// console.log(temp.join('-'));     // hello-how-are-you-?
// console.log(temp.join('++'));    // hello++how++are++you++?

// const alpha='a b c d e f g h i j k l m n o p q r s t u v w x y z';
// const demo=alpha.split(' ');
// console.log(demo.join(''));      // abcdefghijklmnopqrstuvwxyz