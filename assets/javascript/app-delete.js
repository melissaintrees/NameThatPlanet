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

for (var i = 0; i < questionsLibrary.length; i++) {
  // this gives you all of the objects and stores them in a var called questionObject:
  var questionObject = questionsLibrary[i];
  // this sets up a div for your questions with the questions class:
  var questionContainer = $("<div class='questions'>")
      // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    questionContainer.addClass("questions");
  // this stores the individual questions (with the Object.whatever) in a div with a question class:
  var questionDiv = $("<div class='question'>" + questionObject.question + "</div>");
  // and then appends the questionDiv var with all the question divs inside the questionContainer with the one questions div:
  questionContainer.append(questionDiv);
  // this sets up a answers div to the page
  var answersDiv = $("<div class='answers'>");
  // and then you have to do another four loop (since the answers are all in arrays):
  for (var a = 0; a < questionObject.answers.length; a++) {
    // and this makes individual little answer divs inside that answers div:
    var answerDiv = $("<div class='answer'>" + questionObject.answers[a] + "</div>");
    // these add attributes i guess so you can click on those answers and get info:
    answerDiv.attr("data-question", i);
    answerDiv.attr("data-answer", a);
    // and push the answerDiv(s) (line 15) to the answersDiv (line 11) with append:
    answersDiv.append(answerDiv);
  }
}

$(document).on("click", ".answer", function (event) {
  var questionAnswered = $(this).attr("data-question"); // 1
  var answerAnswered = $(this).attr("data-answer");  // 3

  if (questionsLibrary[questionAnswers].correctAnswer == answerAnswered) {
    // YAY
  }
});
// variables needed:
// var timeRemaining;
// var successMessages;
// var errorMessages;

// counters:
// var numberCorrect;
// var numberIncorrect;
// var currentQuestion;
// var timer;
// var timeRemaining;
// var library;

// var questionTime = 10; // seconds to guess
// var answerLength = 3; // seconds shown the answer
// var questionLength;

// // on the click of the start game button, run the startGame function:


// function startGame() {
//   // when we run this function it should trigger the first question: questionArray[0] as well as answerArray[0], displayed in nice html format in the main-content div
//   // show intro to game
//   $("#main-question").html('<br>Test your knowledge of the planets! You have 15 seconds to guess each one! <br> <br><button id="start-button">Start Game</button>');
//   $("#result").hide();
//   $("#options").hide();
//   $("#options li").empty();
//     //add listeners
//   // $("#options .answer").off().on("click", makeGuess);
//   $("#start-button").off().on("click", newQuestion);
//   // reset game variables:
//   numberCorrect = 0;
//   numberIncorrect = 0;
//   // slice the questions

//   library = questionsLibrary.slice();
//   questionTime = questionLength;
//   gameLength = library.length;
// }

// startGame();

// $("#question").on("click", function() {
// var numberCorrect = 0;
// var numberIncorrect = 0;

// });




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