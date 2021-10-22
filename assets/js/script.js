
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question/title");
var instructionEl = document.getElementById("instructions");
var startButtonEl = document.querySelector("#start");
var allButtons = document.querySelector(".anwserButtons");
var btn1 = document.getElementById("anwser1");
var btn2 = document.getElementById("anwser2");
var btn3 = document.getElementById("anwser3");
var btn4 = document.getElementById("anwser4");
var anwserDisplays = document.querySelector(".anwserDisplays");
var correctDisplay = document.getElementById("correctDisplay");
var wrongDisplay = document.getElementById("wrongDisplay");
var quizRecord = [];
var timeLeft = 0;
var questionNum = 0;
var finalScore = 0;
var numberOfTrys = 0;


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

  var timeInterval = setInterval(function(){

    if(timeLeft > 0){

        timerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;

    }else{
      timerEl.textContent = 'Time: ' + timeLeft;
      endOfGame();
      console.log("Timer Else EOG");//Test
      clearInterval(timeInterval);
      return;
    }
  }, 1000);
    
}

function quizRunner(){
  var rightOrWrong;
  
  //Check if There is Time Left
  if(timeLeft < 1){
    return; 
  }else{

    //Change "Title" to Display the Question
    questionEl.textContent = questions[questionNum].question;

    //Change Button Text to Possible Anwsers
    btn1.innerHTML = questions[questionNum].option1;
    btn2.innerHTML = questions[questionNum].option2;
    btn3.innerHTML = questions[questionNum].option3;
    btn4.innerHTML = questions[questionNum].option4;


    //Event Listeners for Each Button
    btn1.addEventListener("click", clickFunction, {once: true});
    btn2.addEventListener("click", clickFunction, {once: true});
    btn3.addEventListener("click", clickFunction, {once: true});
    btn4.addEventListener("click", clickFunction, {once: true});


    

  }  

}


//clickFunction - Captures the event, checks the anwser, increments question count, and calls quizRunner to Loop
function clickFunction(event){
  rightOrWrong = checkAnwser(event.target);
  questionNum++;
  quizRunner();
}


//Check Users Anwser
function checkAnwser(selected){
  
  var selectedOption;
  

  if(selected.id === 'anwser1'){
    selectedOption = questions[questionNum].option1;
    
  }else if(selected.id === 'anwser2'){
    selectedOption = questions[questionNum].option2;
    
  }else if(selected.id === 'anwser3'){
    selectedOption = questions[questionNum].option3;
    
  }else {
    selectedOption = questions[questionNum].option4;
    
  }
  
  if(questions[questionNum].correctAnwser === selectedOption){
    
    correctDisplay.style = "display: inline";
    wrongDisplay.style = "display: none";
    finalScore = finalScore +1;
    return "Correct!";

  }else{
    
    correctDisplay.style = "display: none";
    wrongDisplay.style = "display: inline";
    timeLeft = timeLeft -10;
    return "Wrong!";
  }

  
}

function endOfGame(){
  var userInitials = document.querySelector("#name");
  var inputButton = document.querySelector("#submit");
  var anwserBtnDiv = document.getElementById("anwserButtons");
  localStorage.setItem(numberOfTrys, numberOfTrys);

  //Display All Done Title
  questionEl.textContent = "All Done!";

  //Remove Unwanted Buttons / Display Elements
  allButtons.removeChild(btn1);
  allButtons.removeChild(btn2);
  allButtons.removeChild(btn3);
  allButtons.removeChild(btn4);
  anwserBtnDiv.remove();
  anwserDisplays.removeChild(correctDisplay);
  anwserDisplays.removeChild(wrongDisplay);

  //Display Final Score
  var displayScore = document.getElementById("finalScore"),
      scoreBoardForm = document.getElementById("form");

  displayScore.textContent = "Your final score is " + finalScore + ".";
  scoreBoardForm.style = "display: inline";

  
  //Get Players Name
  inputButton.addEventListener("click", function(event){
    event.preventDefault();
    
    var userData = {
      initials: userInitials.value.trim(),
      score: finalScore  
    };

    console.log(numberOfTrys)

    localStorage.setItem(quizRecord[numberOfTrys], userInitials);
    console.log(userData);
    console.log(quizRecord);
    
    numberOfTrys++;
  });
  
  
  return;
}








startButtonEl.addEventListener("click",startQuiz);
















//List of Possible Questions
const questions = [{
    question: "Ask Something?",
    option1:  "Anwser0!",
    option2:  "Anwser0.2",
    option3:  "Anwser0.3",
    option4:  "Anwser0.4",
    correctAnwser: "Anwser0!"
  }, {
    question: "Ask Second Somethin?",
    option1:  "Anwser1.0",
    option2:  "Anwser1!",
    option3:  "Anwser1.2",
    option4:  "Anwser1.3",
    correctAnwser: "Anwser1!"
  }, {
    question: "Ask Third Somethin?",
    option1:  "Anwser2.0",
    option2:  "Anwser2.1",
    option3:  "Anwser2!",
    option4:  "Anwser2.3",
    correctAnwser: "Anwser2!"
  }, {
    question: "Ask 4 Somethin?",
    option1:  "Anwser3.0",
    option2:  "Anwser3.1",
    option3:  "Anwser3.2",
    option4:  "Anwser3!",
    correctAnwser: "Anwser3!"
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
