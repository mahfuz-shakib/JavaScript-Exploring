/*
step-1: create a .css file and define a class and style inside it.
step-2:add/remove the class to/from the selected element using dom
*/

const para = document.querySelector('#paraID');
function addStyle()
{
    para.classList.add('para-style');
}
function removeStyle()
{
    para.classList.remove('para-style');
}



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

/* CSS style in .css file for DOM-Traversing.js*/
/*
.para-style{
    color: red;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
}
*/
/*----------------------------------------------------------*/