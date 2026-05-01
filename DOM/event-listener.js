/* ---------------------------------------------------*/
/*  syntax: element.EventListener(event,function)
    here,
    element = document.querySelector('tagName/#id/.class');
    event = click / mouseover / mouseout / mousedown / . . .
    function = function name without parenthesis / anonymous function
*/
/* ---------------------------------------------------*/
const heading = document.querySelector("#demo");
const btn = document.querySelector("Button");
btn.addEventListener(
  "click",
  myFunction
); /*  Note: here not use the 'on' prefix  */
function myFunction() {
  heading.innerHTML = "July Revolution 2025";
}

// using anonymous function
const heading2 = document.querySelector("#heading-2");
heading2.addEventListener("mouseover", function () {
  heading2.innerHTML = "Bangladesh 2.0 2025";
});
heading2.addEventListener("mouseout", function () {
  heading2.innerHTML = "July Revolution 2025";
});

// add/remove style using event listener
const heading3 = document.querySelector(".heading-3");
heading3.addEventListener("mouseover", addStyle);
heading3.addEventListener("mouseout", removeStyle);
function addStyle() {
  heading3.classList.add("myStyle");
}
function removeStyle() {
  heading3.classList.remove("myStyle");
}

/*---------------------------------------------------------*/
/* HTML code for event-listener.js*/
/*
<body>
    <h1 id="demo">Bangladesh 2.0 2025</h1>
    <button>Click Me</button>
    <h1 id="heading-2">July Revolution 2025</h1>
    <h1 class="heading-3">Document Object Model</h1>
   <script src="event-listener.js"></script>
</body>
*/

/* css style for event-listener.js*/
/*
.myStyle{
    color: red;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
}
*/
/*----------------------------------------------------------*/
