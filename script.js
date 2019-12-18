colors = generateRandomcolors(6)
var boxes = document.querySelectorAll('.colorpallete');  
var colordisplay = document.querySelector('.rgb-value');
var messagedisplay = document.querySelector('.message');
var header = document.querySelector(".head");
var option = document.querySelector(".option");
var colorpicked = pickcolor();
colordisplay.textContent = colorpicked;
var colorclicked = 0;
for(i=0;i<boxes.length;i++){
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].addEventListener("click",function(){
        colorclicked =  this.style.backgroundColor;
        if(colorpicked === colorclicked){
            changeColor(colorpicked);
            messagedisplay.textContent = "Correct!"; 
            header.style.backgroundColor = colorclicked;
            option.textContent = "PLAY AGAIN?";
        }
        else{
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "TRY AGAIN!";
            messagedisplay.classList.add("messagedisplay");
        }
    });
}
option.addEventListener("click", function () {
    
    option.textContent = "new Colors";
    header.style.backgroundColor = "rgb(119, 119, 250)";
    colors = generateRandomcolors(6);
    colorpicked = pickcolor();
    colordisplay.textContent = colorpicked;
    messagedisplay.textContent = ""; 
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i];
    }  
});

function changeColor(color){
    for (i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor !== color){
            boxes[i].style.backgroundColor = color;
        }
    }
}


function pickcolor(){
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomcolors(noc){
    var num = 0;
    var rgb = [0,0,0];
    var rgbvalue = [];
    for(i=0;i<noc;i++){
      for(j=0;j<3;j++){
        rgb[j] = (Math.floor(Math.random() * 255 + 1));
 
      }
        rgbvalue.push("rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")");
      
    }
    return rgbvalue;
}