// create a trivia game that shows one question at a time from an array of questions
var userAnswer;
var choicesRight = 0;
var choicesWrong = 0;
var choicesNone = 0;
var counterNumber = 10;
var panel = $(".mainArea");

var questionsSet = [
  {
    question: "A day on this planet is equal to 174.5 days on Earth.",
    answers: ["Mercury", "Mars", "Saturn", "Neptune"],
    correctAnswer: "Mercury",
    image: 'assets/images/Mercury_sml.png'
  },
  {
    question: "This planet is also known as the morning star and the evening star.",
    answers: ["Mercury", "Venus", "Uranus", "Pluto"],
    correctAnswer: "Venus",
    image: 'assets/images/Venus_sml.png'
  },
  {
    question: "The surface of this planet moves roughly 1000 miles per hour.",
    answers: ["Jupiter", "Mars", "Saturn", "Earth"],
    correctAnswer: "Earth",
    image: 'assets/images/Earth_sml.png'
  },
  {
    question: "This planet is the most hospitable to life besides earth.",
    answers: ["Saturn", "Uranus", "Mars", "Venus"],
    correctAnswer: "Mars",
    image: 'assets/images/Mars_sml.png'
  },
  {
    question: "This is the largest known planet in our solar system.",
    answers: ["Planet 9", "Pluto", "Jupiter", "Mercury"],
    correctAnswer: "Jupiter",
    image: 'assets/images/Jupiter_sml.png'
  },
  {
    question: "This planet has 150 moons and is known as a 'difficult' planet",
    answers: ["Saturn", "Earth", "Sun", "Mars"],
    correctAnswer: "Saturn",
    image: 'assets/images/Saturn_sml.png'
  },
  {
    question: "This planet orbits the sun on it&#8217;s side and is about 65&#37; ice",
    answers: ["Venus", "Neptune", "Jupiter", "Uranus"],
    correctAnswer: "Uranus",
    image: 'assets/images/Uranus_sml.png'
  },
  {
    question: "This planet is the farthest known planet from the sun.",
    answers: ["Mars", "Neptune", "Saturn", "Pluto"],
    correctAnswer: "Neptune",
    image: 'assets/images/Neptune_sml.png'
  }
]

//variable to holds set Interval to run countdown
var timer;

var quizObject = {
  counter: counterNumber,
  questions: questionsSet,
  choicesRight: 0,
  choicesWrong: 0,
  choicesNone: 0,
  currentQuestion: 0,

  countdown: function () {

    quizObject.counter--;
    //adds the decremented counter var to the .timer-p div insice the
    $(".timer-p").text(quizObject.counter);
    if (quizObject.counter === 0) {
      console.log("times up");
      quizObject.timesUp();
    }
  },
  askQuestions: function () {
    clearInterval(timer)
    timer = setInterval(quizObject.countdown, 1000);
    $(".timer-p").text(quizObject.counter)
    $(".countdown-div").show();
    panel.html('<div class="questions-div">');
    $('.questions-div').html('<p class="question">' + questionsSet[this.currentQuestion].question);
    for (var i = 0; i < questionsSet[this.currentQuestion].answers.length; i++) {

      panel.append("<div class='answer' role='button'>" + questionsSet[this.currentQuestion].answers[i]);
    }
  },
  nextQuestion: function () {
    quizObject.counter = 10;
    // $(".countdown-div").show();
    quizObject.currentQuestion += 1
    if (quizObject.currentQuestion < quizObject.questions.length) {
      quizObject.askQuestions();
    } else {
      // console.log("done")
      quizObject.results();
    }
  },
  timesUp: function () {
    clearInterval(timer)
    $(".countdown-div").hide();
    this.choicesNone++
    // this.handleRight();
    panel.html("<h2 class='current-message'>Time (and Space) are up! The Correct Answer is " + questionsSet[this.currentQuestion].correctAnswer + "<br><br>");
    $(".current-message").append("<img class='planets 'src='" + questionsSet[this.currentQuestion].image + "' />")
    quizObject.counter = 10;
    setTimeout(quizObject.nextQuestion, 3 * 1000);
  },
  results: function () {
    clearInterval(timer)
    $(".countdown-div").hide();
    panel.html("<h2 class='current-message'>Correct Answers: " + this.choicesRight);
    $('.current-message').append("<br><br>Wrong Answers: " + this.choicesWrong + "<br><br> Unanswered: " + this.choicesNone);
    resetbutton = "<p class='main-button-container'><a class='reset-button' href='#' role='button'>Play Again</a></p>"
    $('.current-message').prepend(resetbutton);
  },
  clicked: function (userAnswer) {
    if (userAnswer === questionsSet[this.currentQuestion].correctAnswer) {
      console.log("yes")
      this.handlerightAnswer();
    } else {
      console.log("no")
      this.handlewrongAnswer();
    }
  },
  handlerightAnswer: function () {
    this.choicesRight++
    panel.html("<h2 class='current-message'>You answered, " + questionsSet[this.currentQuestion].correctAnswer + "! That's Correct! <br><br>");
    $(".current-message").append("<img class='planets' src='" + questionsSet[this.currentQuestion].image + "' />")
    setTimeout(quizObject.nextQuestion, 3 * 1000);
  },
  handlewrongAnswer: function () {
    this.choicesWrong++
    panel.html("<h2 class='current-message'>Close But No Cigar. It was " + questionsSet[this.currentQuestion].correctAnswer + ".<br><br>");
    $(".current-message").append("<img class='planets' src='" + questionsSet[this.currentQuestion].image + "' />")
    setTimeout(quizObject.nextQuestion, 3 * 1000);
  },
  reset: function () {
    $(".countdown-div").show();
    this.currentQuestion = 0;
    this.counter = counterNumber;
    this.choicesRight = 0;
    this.choicesWrong = 0;
    this.countdown();
    this.askQuestions();
  }
}

panel.empty("")

function initialScreen() {
  startScreen = "<div class='main-button-container'><a class='btn btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></div>";
  panel.html(startScreen);
}
initialScreen();

// on clicks === on click for starting game
$(document).on("click", ".start-button", function () {
  $(".new-div").html("<h2 class='countdown-div'>Time Remaining: <span class='timer-p'>10</span> Seconds</h2>");
  quizObject.askQuestions();
});

// === on click for getting which button was clicked

$(document).on('click touchstart', '.answer', function (event) {

  userAnswer = $(event.target).text();
  quizObject.clicked(userAnswer);

});

// on click for reseting the game
$(document).on('click', '.reset-button', function () {
  quizObject.reset();
});

//javascript library for the stars: IFFE
// // Just For Fun. Enjoy finding new constellations ;-)

(function ($) {

  function generateStar(canvas, ctx, starRadius) {
    ctx.beginPath();
    ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius * Math.random(), 0, Math.PI * 2, false);
    //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

    var rand = Math.random();
    if (rand <= 0.5) {
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      ctx.shadowBlur = 3;
    }
    else if (rand > 0.75) {
      ctx.fillStyle = "rgba(255, 254, 196, 1)";
      ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
      ctx.shadowBlur = 4;
    }
    else {
      ctx.fillStyle = "rgba(192, 247, 255, 1)";
      ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
      ctx.shadowBlur = 7;
    }
    ctx.fill();
  }

  $(function () {

    var canvas = document.getElementById("space");
    var context = canvas.getContext("2d");

    onresize = function () {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    onresize();

    interval = setInterval(
      function (interval) {
        generateStar(canvas, context, 3);
      }
      , 24);

    setTimeout( // Stop creating stars after 100s
      function () { clearInterval(interval); }
      , 200000
    );

  });
})(jQuery);




// when all of the questions have been asked. 
  // update the DOM to reflect that all of the questions have been asked. 
  // display the right answer count
  // display the wrong answer count
  // display a reset button the is tied to a reset game function.
  // add timer functionality: setTimeout(function, milliseconds)
  // variables
  // create an object to hold the question, answers array, correct answer, image file path. 
  // create a playerCorrectAnswer count = 0
  // create a playerWrongAnswer count = 0


// askQuestions();


  // if the player answers the question && they get it right
    // increment the player's correct answer count by 1
    // update the DOM to reflect a win message && a winning image/gif
    // wait a few seconds 
        // implement timer on function nextQuestion setTimeout(function, few k milliseconds)
    // then move on to the next question
  // if the player answers the question && they get it wrong
    // increment the player's wrong answer count by 1
    // update the DOM to reflect a losing message && the correct answer
    // wait a few seconds
    // then move on to the next question
  // if the player doesn't answer the question && they run out of time
    // increment the player's wrong answer count by 1
    // update the DOM to reflect a times up && display the correct answer
    // wait a few seconds
    // then move on to the next question


//   askQuestions: function (){
//     // add questions and answersto the DOM
//     // capture user answer from the DOM
//     currentQuestion = this.questionsSet[0];
//     // question2 = quizObject.questionsSet[1];
//     currentAnswer = this.answerSet[0];
//     correctAnswer = this.correctAnswers[0];
//     imageDisplay = this.imagesSet[0];
//     $(".mainArea").html('<div class="questions-div">');
//     $(".questions-div").html("<p class='question'>" + currentQuestion);
    // $(".mainArea").append('<div class="answers-div">');
    // $(".answers-div").append("<p class='first-answer answer'>" + currentAnswer[0]);
//     $(".answers-div").append("<p class='second-answer answer'>" + currentAnswer[1]);
//     $(".answers-div").append("<p class='third-answer answer'>" + currentAnswer[2]);
//     $(".answers-div").append("<p class='fourth-answer answer'>" + currentAnswer[3]);
//     // checkQuestions();
//   },

// for (var i = 0; i < questionsSet[this.currentQuestion].answers.length; i++) {
//   panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
//     + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
// }
//   checkQuestions: function (){
//       // now listen for what p class the user clicks on 
//       $('.answers-div').on('click', function (event) {
//         console.log("You clicked on: ", event.target);
//         userAnswer = $(event.target).text();
//         if (!userAnswer) {
//           console.log("you forgot to answer the question!")
//           choicesNone++
//           $(".mainArea").append('<div class="results-div">');
//           $('.results-div').append("<div class='current-message'>")
//           $(".mainArea").empty("");
//           $('.current-message').text("You Forgot to Answer!")

//         }
//         else if (userAnswer === correctAnswer) {
//           console.log("yes")
//           choicesRight++
//           $(".mainArea").append('<div class="results-div">');
//           $('.results-div').append("<div class='current-message'>")
//           $(".mainArea").empty("");
//           $(".mainArea").append('<div class="results-div">');
//           $('.results-div').html("<div class='current-message'>You Are Correct!")
//           $('.results-div').append(imageDisplay);


//         } else if (userAnswer != correctAnswer) {
//           console.log("no")
//           choicesWrong++
//           $(".mainArea").append('<div class="results-div">');
//           $('.results-div').append("<div class='current-message'>")
//           $(".mainArea").empty("");
//           $(".mainArea").append('<div class="results-div">');
//           $('.results-div').html("<div class='current-message'>You Are Wrong!<br> The Correct Answer is " + correctAnswer);
//           setTimeout(2000);
//         }
//       });
//   }
// }




