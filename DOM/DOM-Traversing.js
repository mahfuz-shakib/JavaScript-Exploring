/*--- 1. Downward traversing : parent --> children ---*/

// i. querySelector() / querySelectorAll()
const list = document.querySelector('.my-list');
const item1 = list.querySelector('li');   //by default querySElector select first element

// ii. children + index 
// const item2 = list.children    //produce list
const item2 = list.children[1]    //produce 2nd child
const item3 = list.children[2]    //produce 3rd child


/*--- 2. Upwards traversing : children --> parent ---*/
const child2 = document.querySelectorAll('li')[1];
const parent = child2.parentElement;

/*--- 3. Sideways traversing : current sibling ---> next sibling/previous sibling ---*/
const child1 = child2.previousElementSibling;
const child3 = child2.nextElementSibling;

/*--- 4.   children --> parent --> children[index] (Not recommended) */
const children1 = document.querySelector('li');
const par = children1.parentElement;
const children3 = par.children[2];



/*---------------------------------------------------------*/
/* HTML code for DOM-Traversing.js*/
/*
<body>
    <ul class="my-list">
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
    </ul>
   <script src="DOM-Traversing.js"></script>
</body>
*/
/*----------------------------------------------------------*/