makeBubble();
runtime();
var hitval;
var timer =60;
var score =0;

function newHit(){
     hitval = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent=hitval;
}
newHit();


function incScore(){
   score += 10;
   document.querySelector("#scoreVal").textContent=score;

}

document.querySelector("#pbtm").addEventListener("click", function(dets){
  var clickedNum= Number(dets.target.textContent);
  console.log(clickedNum)
  
  if(clickedNum===hitval){
    incScore();
    newHit();
    makeBubble();
    
}
}
)



function makeBubble(){
var clutter = "";
for (i = 1; i <= 150; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
};


function runtime(){
    var timerange =setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerval);
            document.querySelector("#pbtm").innerHTML="<h1>Game Over!!<\h1>"
        }
    },1000)
};

