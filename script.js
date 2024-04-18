          //This whole code is making bubble and generating random numbers.
          var timer = 60;
          var score = 0;
          var hitrn = 0;

          // in this code we have increase the value of score by applying a function.
          function increaseScore(){
            score += 10;
            document.querySelector("#scoreval").textContent = score; // yeah line scoreval ko select kar rahi h and textContent run karega.
          }

        //In this function we have made a function to get random hit no.
          function getNewHit(){
           hitrn = Math.floor(Math.random() * 10);
            document.querySelector("#hitval").textContent = hitrn;
          }
function makebubble() {
var clutter = "";

for(var i = 1; i<=75; i++){
    var rn = Math.floor(Math.random()* 10)// Math.random will generate random no. and Math.floor will remove decimal and (we have mix it).
clutter += `<div class ="bubble">${rn}</div>`;   //+= this means ki pichle save rakhna and agge jo bhi liho add kardena.
}
document.querySelector("#pbtm").innerHTML = clutter; 
}

// In this code we have run the timer for bubble by using setInterval function
function runTimer(){
 var timerint = setInterval(function(){
    if(timer > 0) {
        timer--; // this means agr zero se badi value hogi toh timer ki value ghat jayegi. ex-using stopwatch while running.
        document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerint); // chalne ke baad use clear kardo means stop
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
    }
     }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent); //yeah batyega ki kispe hmne click kara h agr hm yeah nhi likhenge toh pta nhi chalega kispe click kara h.
      if(clickednum === hitrn) {
           increaseScore();
           makebubble();
           getNewHit();
      }
});             //textContent se hm div ke andar ka text milega smajhe bsdk.

runTimer();
makebubble();
getNewHit();

                           //bubbleing event-
//agr hmne bubble p click kara toh event raise hoga agr event nhi mila toh 
//bubble ke parent p event raise hoga agr uspe bhi nahi mile toh uske bhi parent p event raise hoga.
// or agr mil gya toh run hojayega.