
var quiz = [
{
    question: "1) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctAnswer: "a"
},
{
    question: "2) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctAnswer: "a"
},
{
    question: "3) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctAnswer: "a"
},
{
    question: "4) Who snapped away Thanos?",
    answers: [
        "a: Ironman",
        "b: Captain America",
        "c: Spiderman",
        "d: George"
    ],
    correctAnswer: "a"
}
]
// An array of objects, which will be our quiz questions

// now we want to put the quiz questions in our $(#quiz) div
// grab the element, make a for loop, for every question make a new paragraph,
// then make one more paragraph for the answers and turn them into buttons.
var newDiv = $("#quiz"); 
for(var i=0; i<quiz.length;i++){
    newDiv.append("<div>"+quiz[i].question+"</div>");
    for(var x=0; x<quiz[i].answers.length;x++){
        newDiv.append("<div><button>"+quiz[i].answers[x]+"<button></div>");
    }
    
    console.log(quiz[0].answers.a);
}

