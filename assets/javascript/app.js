// quiz, which is just an array of objects. Each object has a question, an array of answers, and a unique name
// as well as a correct answer
var quiz = [
{
    question: "1) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctValue: 1,
    name: "first"
},
{
    question: "2) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctValue: 1,
    name: "second"
},
{
    question: "3) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctValue: 1,
    name: "third"
},
{
    question: "4) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctValue: 1,
    name: "fourth"
}
]

var counterID=0;
// append the questions and array of answers and the names to the HTML
// Each multiple choice answer has a unique number ID starting from 1
// The values of the answers vary from 1 to 4
// Now, without looking at the values of the answers, we can just check to see which ID's were checked because those will be correct answers
// For right now, correct answers have the ID 1,5,9,13
var newDiv = $("#quiz"); 
for(var i=0; i<quiz.length;i++){
    newDiv.append("<div>"+quiz[i].question+"</div>");
    for(var x=0; x<quiz[i].answers.length;x++){
        counterID++;
        newDiv.append("<div><input id='"+counterID+"' value= "+(x+1)+" type='radio' name='"
        +quiz[i].name+"'>"
         +quiz[i].answers[x]+ "</div>");
    }
}

  //START THE TIMER
  start();

//STOPWATCH
// =============================
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var time = 10;

  function start() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }

  }
  function stop() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }
  function count() {
    time--;
    if(time<10){
        $("#display").text("00:0"+time);

    }else{
        $("#display").text("00:"+time);
    }
    
  }

// still need to tally up correct answers and then display the results
// also the submit button and the timer should redirect to another page 
// most likely using the innerhtml where the whole body div changes to something else
// after the form is completed, we need to tally the number of "correct" values from the radio buttons
// to determine how many answers the user got right

var correct=0;
var incorrect=0;




var score = function(){
    
        var valueFirst = $("input[name='first']:checked").val();
        if(valueFirst==1){
            alert("correct");
            correct++;
            console.log("correct: "+correct);
        } 
        var valueSecond = $("input[name='second']:checked").val();
         if(valueSecond==1){
            alert("correct");
            correct++;
            console.log("correct: "+correct);
        } 
        var valueThird = $("input[name='third']:checked").val();
        if(valueThird==1){
            alert("correct");
            correct++;
            console.log("correct: "+correct);
        }
        var valueFourth = $("input[name='fourth']:checked").val();
        if(valueFourth==1){
            alert("correct");
            correct++;
            console.log("correct: "+correct);
        } 

}
$(document).ready(function(){

    
});
