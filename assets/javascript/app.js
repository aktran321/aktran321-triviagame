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
    correctAnswer: "a",
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
    correctAnswer: "a",
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
    correctAnswer: "a",
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
    correctAnswer: "a",
    name: "fourth"
}
]

// append the questions and array of answers and the names to the HTML
var newDiv = $("#quiz"); 
for(var i=0; i<quiz.length;i++){
    newDiv.append("<div>"+quiz[i].question+"</div>");
    for(var x=0; x<quiz[i].answers.length;x++){
        newDiv.append("<div><input type='radio' name='"+quiz[i].name+"'>" +quiz[i].answers[x]+ "</div>");
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

