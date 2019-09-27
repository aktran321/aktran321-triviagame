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
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var time = 10;
  var updatedTime=0;

  //Function to count the time and reduce its number by 1 and display it on the display div.
  function count() {
    time--;
    
    if(time<10){
        $("#display").text("00:0"+time);

    }else{
        $("#display").text("00:"+time);
    }
    console.log("In the count function" + time)
    updatedTime= time;
    return updatedTime;

  }
  function start() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }

  }
 // call the stop function after a specified time in ms
 var t =setTimeout(function(){stop(); score()},10000);
  //We know the stop function actually works, because it has stopped time
  function stop() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    console.log("we have stopped time!");
    console.log("time stopped at: "+time);
    clearTimeout(t);
  }

// still need to tally up correct answers and then display the results
// also the submit button and the timer should redirect to another page 
// most likely using the innerhtml where the whole body div changes to something else
// after the form is completed, we need to tally the number of "correct" values from the radio buttons
// to determine how many answers the user got right





// In the html, the score function is called when the user hits submit
var score = function(){

var correct=0;
var incorrect=quiz.length;
var unanswered=0;
//create a variable to retrieve the valuye of the checked answer in the first question and then see if it matches the value of our correctValue
        var valueFirst = $("input[name='first']:checked").val();
        if(valueFirst==quiz[0].correctValue){
            correct++;
        } else if(valueFirst==null){
            unanswered++;
        } 
        var valueSecond = $("input[name='second']:checked").val();
         if(valueSecond==quiz[1].correctValue){
            correct++;
        } else if(valueSecond==null){
            unanswered++;
        } 
        var valueThird = $("input[name='third']:checked").val();
        if(valueThird==quiz[2].correctValue){
            correct++;
        }else if(valueThird==null){
            unanswered++;
        } 
        var valueFourth = $("input[name='fourth']:checked").val();
        if(valueFourth==quiz[3].correctValue){
            correct++;
        } else if(valueFourth==null){
            unanswered++;
        } 

        incorrect = incorrect-correct-unanswered;
        
        console.log("correct: " + correct);
        console.log("incorrect: "+ incorrect);
        console.log("unanswered: " + unanswered);
        
            $("#lowerBody").text(' Correct: '+correct+' Incorrect: '+incorrect+' Missed: '+unanswered);
            if (correct==4){
                $("#lowerBody").append("<br><br><p> Perfect!</p>");
            } else{
                $("#lowerBody").append("<br><br><p> Hit refresh to retry for a perfect score!</p>");
            }
        

}

//NOW we must create a function that changes to the amount correct, missed, and incorrect to display results.
// it will take in 3 variables


 