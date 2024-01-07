function makeBubble(){
    var clutter = "";
    var i = 99;
for(i=1; i<=99; i++){
    var rn = Math.floor(Math.random()*10)
    
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}
var timer=60;
var score=0;
var inti=0;
function setTimer(){
    var timerin = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".box1").textContent=timer;
        }else{
            clearInterval(timerin);
            document.querySelector(".pbtm").innerHTML = `<h1>Game over</h1>`;
        }
    },1000);
}
function newHit(){
    inti = Math.floor(Math.random()*10)
    document.querySelector(".box2").textContent=inti;
}
function setScore(){
    score += 10;
    document.querySelector(".box3").textContent=score;
}
document.querySelector(".pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === inti){
        setScore();
        makeBubble();
        newHit();

    }
})

newHit();
setTimer();
makeBubble();