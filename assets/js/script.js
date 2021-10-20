
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question/title");
var instructionEl = document.getElementById("instructions");
var startButtonEl = document.querySelector("#start");
var btn1 = document.getElementById("anwser1");
var btn2 = document.getElementById("anwser2");
var btn3 = document.getElementById("anwser3");
var btn4 = document.getElementById("anwser4");
var timeLeft = 0;

//Styling
timerEl.setAttribute("style","text-align: right");




function startQuiz(){
    timer();

    instructionEl.parentNode.removeChild(instructionEl);
    startButtonEl.parentNode.removeChild(startButtonEl);
    
    btn1.style = "display: inline";
    btn2.style = "display: inline";
    btn3.style = "display: inline";
    btn4.style = "display: inline";
    
    quizRunner();

}

//Timmer
function timer(){
    timeLeft = 75;

    setInterval(function(){

        if(timeLeft > 0){

            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;

        }else{
            //Game Over
            timerEl.textContent = 'Time: ' + timeLeft;
            clearInterval(timeInterval);
        }
    },1000);
    
}

function quizRunner(){
  var questionCounter = 0;
  
  while(timeLeft>0){
    askQuestion(questionCounter);
    console.log("Test - quiz Runner Loop" + questionCounter);
    questionCounter++;
  }
  
    

}

function askQuestion(questionNum){
  var selectedAnwser;
  var wasAnwserRight;

  questionEl.textContent = questions[questionNum].question;

  
  btn1.innerHTML = questions[questionNum].option1;
  btn2.innerHTML = questions[questionNum].option2;
  btn3.innerHTML = questions[questionNum].option3;
  btn4.innerHTML = questions[questionNum].option4;

  var allButtons = document.querySelector('button');

  allButtons.addEventListener("click", function(event) {
    selectedAnwser = event.target;
    wasAnwserRight = checkAnwser(selectedAnwser);
  });
  
  return;

}

//Take User Input

//Check Users Anwser
function checkAnwser(selected){
  console.log("Test - Check Anwser"); 
  return "Yes";
};

//Decrease Time For Wrong Anwser



startButtonEl.addEventListener("click",startQuiz);





//List of Possible Questions
const questions = [{
    question: "Ask Something?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask Second Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask Third Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask 4 Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask 5 Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask 6 Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask 7 Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask 8 Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask 9 Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }, {
    question: "Ask 10 Somethin?",
    option1:  "Anwser1",
    option2:  "Anwser2",
    option3:  "Anwser3",
    option4:  "Anwser4",
    correctAnwser: "Anwser!"
  }]
