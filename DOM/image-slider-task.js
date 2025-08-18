const images=['./Image/mac.jpg','./Image/cellphone.jpg','./Image/coffe.jpg','./Image/vegetable.jpg','./Image/car.jpg'];
const img=document.querySelector('img');
let count=0;
img.src=images[0];
function previous()
{
    count--;
    if(count < 0 ) count=images.length-1;
    img.src=images[count];

}
function next()
{
    count++;
    if(count===images.length) count=0;
    img.src=images[count];
}




/*---------------------------------------------------------*/
/* HTML code for DOM-Traversing.js*/
/*
<body>
    <h1 style="text-align: center;;">Image Slider</h1>
    <div style="text-align: center;">
        <button onclick="previous()"><h3>Prev</h3></button>
        <img src="#" alt="" width="500px" height="400px">
        <button onclick="next()"><h3>Next</h3></button>
    </div>
   <script src="image-slider-task.js"></script>
</body>
*/
/*----------------------------------------------------------*/

