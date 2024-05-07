var time = 60
var score = 0

function increaseScore (){
score = score + 10;
// score += 10;
document.querySelector("#score").textContent = score
}
let  hitnum = ""
function getnewhit (){
 hitnum = Math.floor(Math.random()* 10)
 document.querySelector("#hit-num").innerText = hitnum
}

getnewhit ();

function makeBubble (){
    var clutter = ""

    for (var i = 1; i <=180; i++){
         var rn = Math.floor(Math.random() *    10) 
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    
    var panelBody = document.querySelector(".panel-body");
    
    panelBody.innerHTML = clutter
}

makeBubble();

// increaseScore ();

document.querySelector(".panel-body").addEventListener("click", function(val){
var updateChangeNum = Number(val.target.textContent)
if(updateChangeNum === hitnum){
    increaseScore ()
    makeBubble()
    getnewhit()
} else{
    console.log("try again")
}
});

function timer (){
 var tInterval =   setInterval(function(){
        if (time > 0){
            time--;
            document.querySelector("#timer-count").textContent = time
        } else{
            clearInterval(tInterval);
            document.querySelector(".panel-body").innerHTML = "<h2 class ='game-over'>Game Over</h2>"
        }
    },1000)
}

timer();

