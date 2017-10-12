$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
  startScreen = "<p class='main-button-container'><a class='btn btn-md btn-block start-button' href='#' role='button'>Begin Quiz</a></p>";
  $(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function(event){
  event.preventDefault();  // added line to test issue on GitHub Viewer

  generateHTML();

  timerWrapper();

}); // Closes start-button click

$(document).on("click", ".answer", function(event){
  //answeredQuestion = true;

  selectedAnswer = $(this).text();
  if(selectedAnswer === correctAnswers[questionCounter]) {
    //alert("correct");

    clearInterval(theClock);
    generateWin();
  }
  else {
    //alert("wrong answer!");
    clearInterval(theClock);
    generateLoss();
  }
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
  resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
  unansweredTally++;
  gameHTML = "<p class=' timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class=''>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 1000);  //  change to 4000 or other amount
}

function generateWin() {
  correctTally++;
  gameHTML = "<p class='timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 1000);  //  change to 4000 or other amount
}

function generateLoss() {
  incorrectTally++;
  gameHTML = "<p class=' timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class=''>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 1000); //  change to 4000 or other amount
}

function generateHTML() {
  gameHTML = "<p class='timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='question'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
    $(".mainArea").html(gameHTML);
}

function wait() {
  if (questionCounter < 7) {
  questionCounter++;
  generateHTML();
  counter = 30;
  timerWrapper();
  }
  else {
    finalScreen();
  }
}

function timerWrapper() {
  theClock = setInterval(thirtySeconds, 1000);
  function thirtySeconds() {
    if (counter === 0) {
      clearInterval(theClock);
      generateLossDueToTimeOut();
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}

function finalScreen() {
  gameHTML = "<p class=' timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class=''>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class=' reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".mainArea").html(gameHTML);
}

function resetGame() {
  questionCounter = 0;
  correctTally = 0;
  incorrectTally = 0;
  unansweredTally = 0;
  counter = 30;
  generateHTML();
  timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;

var questionsLibrary = [
  {
    question: "A day on this planet is equal to 174.5 days on Earth.",
    answers: ["Mars", "Mercury", "Planet 9", "Neptune"],
    correctAnswer: 1,
    image: "assets/images/Mercury.png"
  },
  {
    question: "This planet is also known as the morning star and the evening star.",
    answers: ["Venus", "Mercury", "Uranus", "Pluto"],
    correctAnswer: 0,
    image: "assets/images/Venus.png"
  },
  {
    question: "The surface of this planet moves roughly 1000 miles per hour.",
    answers: ["Jupiter", "Mars", "Saturn", "Earth"],
    correctAnswer: 3,
    image: "assets/images/Earth.png"
  },
  {
    question: "This planet is the most hospitable to life besides earth.",
    answers: ["Saturn", "Uranus", "Mars", "Venus"],
    correctAnswer: 2,
    image: "assets/images/Mars.png"
  },
  {
    question: "This is the largest known planet in our solar system.",
    answers: ["Planet 9", "Pluto", "Jupiter", "Mercury"],
    correctAnswer: 2,
    image: "assets/images/Jupiter.png"
  },
  {
    question: "This planet has 150 moons.",
    answers: ["Saturn", "Earth", "Sun", "Mars"],
    correctAnswer: 0,
    image: "assets/images/Saturn.png"
  },
  {
    question: "This planet orbits the sun on it&#8217;s side and is about 65&#37; ice.",
    answers: ["Venus", "Neptune", "Jupiter", "Uranus"],
    correctAnswer: 3,
    image: "assets/images/Uranus.png"
  },
  {
    question: "This planet is the farthest known planet from the sun.",
    answers: ["Mars", "Neptune", "Saturn", "Pluto"],
    correctAnswer: 3,
    image: "assets/images/Neptune.png"
  }

];



var questionArray = ["A day on this planet is equal to 174.5 days on Earth.", "This planet is also known as the morning star and the evening star.", "The surface of this planet moves roughly 1000 miles per hour.","This planet is the most hospitable to life besides earth.", "This is the largest known planet in our solar system.", "This planet has 150 moons.","This planet orbits the sun on it&#8217;s side and is about 65&#37; ice.", "This planet is the farthest known planet from the sun."];
var answerArray = [["Canberra", "Melbourne", "Sydney", "Darwin"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Tainan City", "Taichung", "Taipei", "Hsinchu"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];

var imageArray = ["<img class='center-block img-right' src='assets/images/Mercury.png'>", "<img class='center-block img-right' src='assets/images/Venus.png'>", "<img class='center-block img-right' src='assets/images/Earth.png'>", "<img class='center-block img-right' src='assets/images/Mars.png'>", "<img class='center-block img-right' src='assets/images/Jupiter.png'>", "<img class='center-block img-right' src='assets/images/Saturn.png'>", "<img class='center-block img-right' src='assets/images/Uranus.png'>", "<img class='center-block img-right' src='assets/images/Neptune.png'>"];
var correctAnswers = ["A. Canberra", "B. Monrovia", "C. Taipei", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
