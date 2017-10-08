// quiz content:
// Mercury
//   A day on this planet is equal to 174.5 days on Earth. Possible Answers: [Jupiter, Mars, Venus, Mercury] Answer is Possible Answers[3]; Mercury
// Venus
//   Which planet is also known as the morning star and the evening star?
// Earth
//   The surface of this planet moves roughly 1000 miles per hour.
// Mars
//   This planet is the most hospitable to life besides earth.
// Jupiter
//   Which is the largest planet? Jupiter
// Saturn
//   This planet has 150 moons.
// Uranus
//   This planet orbits the sun on it’s side and is about 65% ice.
// Neptune
//   This planet is the farthest known planet from the sun.

// functions

// variables needed:

// var questionArray = [];
// var answerArray = [];
// var imageArray = [];
// var correct-answer = [];
// var time_remaining;
// var success-messages;
// var error-messages;

// counters:
// correct-answers = 0;
// incorrect-answers = 0;
// unanswered-answers = 0;

// reset game
// function to start game on the click of the "Start," button.
// displayed is:
//  - the first question, a timer, and a list of possible answers to click on.
//  - if the answer === correct_answer && time_remaining is not equal to zero,
//        then display success-message
//        correct-answer + 1
//  - else if the answer != correct answer && time_remaining is not equal to zero,
//        then display error-message
//        incorrect-answers + 1
//  - else time_remaining is equal to zero and answer = to nothing,
//        then advance to next question
//        unanswered-answers + 1

$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
  startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
  $(".mainArea").html(startScreen);
}

initialScreen();


