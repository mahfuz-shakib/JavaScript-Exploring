const len = document.querySelectorAll('button').length;
for(let i=0;i<len;i++)
{
    let btn = document.querySelectorAll("button")[i];
    btn.addEventListener("click", function () {
    btn.classList.add('myStyle');

    setTimeout(function(){
    btn.classList.remove('myStyle');
  },500);
  });

}
//---------------------------------------------------------------------------
let count=0;
document.addEventListener('keypress',function(event){
    const myKey = event.key.toUpperCase();    // D ---> 68
    let index = myKey.charCodeAt(0)-65;   // 68-65 --> 3
    let btn = document.querySelectorAll('button')[index];

    btn.classList.add('myStyle');
    setTimeout(function(){
        btn.classList.remove('myStyle');
    },500);

    count++;
    document.querySelectorAll('span')[0].innerHTML=count;

})
//---------------------------------------------------------------------------




/*---------------------------------------------------------*/
/* HTML code for event-listener.js*/
/*
<body>
    <div style="text-align: center">
      <button style="padding: 8px 10px; margin-top:8px">A</button>
      <button style="padding: 8px 10px; margin-top:8px">B</button>
      <button style="padding: 8px 10px; margin-top:8px">C</button>
      <button style="padding: 8px 10px; margin-top:8px">D</button>
      <button style="padding: 8px 10px; margin-top:8px">E</button>
      <button style="padding: 8px 10px; margin-top:8px">F</button>
      <button style="padding: 8px 10px; margin-top:8px">G</button>
      <button style="padding: 8px 10px; margin-top:8px">H</button>
      <button style="padding: 8px 10px; margin-top:8px">I</button>
      <button style="padding: 8px 10px; margin-top:8px">J</button>
      <button style="padding: 8px 10px; margin-top:8px">K</button>
      <button style="padding: 8px 10px; margin-top:8px">L</button>
      <button style="padding: 8px 10px; margin-top:8px">M</button> <br>
      <button style="padding: 8px 10px; margin-top:8px">N</button>
      <button style="padding: 8px 10px; margin-top:8px">O</button>
      <button style="padding: 8px 10px; margin-top:8px">P</button>
      <button style="padding: 8px 10px; margin-top:8px">Q</button>
      <button style="padding: 8px 10px; margin-top:8px">R</button>
      <button style="padding: 8px 10px; margin-top:8px">S</button>
      <button style="padding: 8px 10px; margin-top:8px">T</button>
      <button style="padding: 8px 10px; margin-top:8px">U</button>
      <button style="padding: 8px 10px; margin-top:8px">V</button>
      <button style="padding: 8px 10px; margin-top:8px">W</button>
      <button style="padding: 8px 10px; margin-top:8px">X</button>
      <button style="padding: 8px 10px; margin-top:8px">Y</button>
      <button style="padding: 8px 10px; margin-top:8px">Z</button>
      <hr />
    </div>
    <div style="display: grid; justify-content: center; text-align: center;">
      <label for="Text" style="font-size: 1.5rem; font-weight: bold"
      >Text Box</label
    >
    <textarea
      name="Text"
      id="Text"
      style="resize: none; display: block; font-size: 1.5rem; padding: 5px"
      cols="25"
      rows="5"
    >
    </textarea>
    <h1>Total keys press: <span>0</span></h1>
    </div>
    <script src="Event--keypress.js"></script>
  </body>
*/

/* css style for event-listener.js*/
/*
.myStyle{
    background-color: red;;
}
*/
/*----------------------------------------------------------*/