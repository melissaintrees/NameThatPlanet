$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
  startScreen = "<p class='main-button-container'><a class='btn btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
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

  selectedAnswer = $(this).text();
  if(selectedAnswer === correctAnswers[questionCounter]) {
    clearInterval(theClock);
    generateWin();
  }

  else {
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
  gameHTML = "<p class=' timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class=''>You forgot to pick an answer! " + correctAnswers[questionCounter] + " was the answer you missed</p>" + "<img class='center-block img-wrong' src='assets/images/Wrong-BlackHole.jpg'>";
  $(".mainArea").html(gameHTML);
  $(".timer-p").empty(gameHTML);
  setTimeout(wait, 2000);  //  change to 4000 or other amount
}

function generateWin() {
  correctTally++;
  gameHTML = "<p class='timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class=''>Horray!!! " + correctAnswers[questionCounter] + " was right! </p> <br> " + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  $(".timer-p").empty(gameHTML);
  setTimeout(wait, 2500);  //  change to 4000 or other amount
}

function generateLoss() {
  incorrectTally++;
  gameHTML = "<p class=' timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class=''>Nope! It was: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/Wrong-BlackHole.jpg'>" + " <br> <br> <p> Black Hole </p> ";
  $(".mainArea").html(gameHTML);
  $(".timer-p").empty(gameHTML);
  setTimeout(wait, 2500); //  change to 4000 or other amount
}

function generateHTML() {
  gameHTML = "<p class='timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='question'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
    $(".mainArea").html(gameHTML);
    console.log(answerArray[questionCounter][3])
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
  gameHTML = "<p class=' timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class=''>Here's Your Score!" + "</p>" + "<p class='summary-correct'>Correct: " + correctTally + "</p>" + "<p>Wrong: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class=' reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Take It Again!</a></p>";

  $(".mainArea").html(gameHTML);
  $(".timer-p").empty(gameHTML);
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


var questionArray = ["A day on this planet is equal to 174.5 days on Earth.", "This planet is also known as the morning star and the evening star.", "The surface of this planet moves roughly 1000 miles per hour.","This planet is the most hospitable to life besides earth.", "This is the largest known planet in our solar system.", "This planet has 150 moons.","This planet orbits the sun on it&#8217;s side and is about 65&#37; ice.", "This planet is the farthest known planet from the sun."];
var answerArray = [["Mercury", "Mars", "Saturn", "Neptune"], ["Mercury", "Venus", "Uranus", "Pluto"], ["Jupiter", "Mars", "Saturn", "Earth"], ["Saturn", "Uranus", "Mars", "Venus"], ["Planet 9", "Pluto", "Jupiter", "Mercury"], ["Saturn", "Earth", "Sun", "Mars"], ["Venus", "Neptune", "Jupiter", "Uranus"], ["Mars", "Neptune", "Saturn", "Pluto"]];

var imageArray = ["<img class='center-block img-right' src='assets/images/Mercury.jpg'>", "<img class='center-block img-right' src='assets/images/Venus.jpg'>", "<img class='center-block img-right' src='assets/images/Earth.jpg'>", "<img class='center-block img-right' src='assets/images/Mars.jpg'>", "<img class='center-block img-right' src='assets/images/Jupiter.jpg'>", "<img class='center-block img-right' src='assets/images/Saturn.jpg'>", "<img class='center-block img-right' src='assets/images/Uranus.jpg'>", "<img class='center-block img-right' src='assets/images/Neptune.jpg'>"];
var correctAnswers = ["A. Mercury", "B. Venus", "D. Earth", "C. Mars", "C. Jupiter", "A. Saturn", "D. Uranus", "B. Neptune"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


// Just For Fun. Enjoy finding new constellations ;-)

(function($){

  function generateStar(canvas, ctx, starRadius){
      ctx.beginPath();
      ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius*Math.random(), 0, Math.PI*2, false);
      //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

      var rand = Math.random();
      if(rand <= 0.5){
          ctx.fillStyle = "rgba(255, 255, 255, 1)";
          ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
          ctx.shadowBlur = 3;
      }
      else if(rand > 0.75){
          ctx.fillStyle = "rgba(255, 254, 196, 1)";
          ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
          ctx.shadowBlur = 4;
      }
      else{
          ctx.fillStyle = "rgba(192, 247, 255, 1)";
          ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
          ctx.shadowBlur = 7;
      }
      ctx.fill();
  }

  $(function(){

    var canvas = document.getElementById("space");
    var context = canvas.getContext("2d");

    onresize = function(){
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    onresize();

    interval = setInterval(
      function(interval){
        generateStar(canvas, context, 3);
      }
      , 24);

    setTimeout( // Stop sreating stars after 10s
      function(){ clearInterval(interval); }
      ,100000
    );

  });
})(jQuery);