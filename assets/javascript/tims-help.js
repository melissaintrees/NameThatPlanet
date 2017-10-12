for (var i = 0; i < questionsLibrary.length; i++) {
  // this gives you all of the objects and stores them in a var called questionObject:
  var questionObject = questionsLibrary[i];
  // this sets up a div for your questions with the questions class:
  var questionContainer = $("<div class='questions'>")
  // this stores the individual questions (with the Object.whatever) in a div with a question class:
  var questionDiv = $("<div class='question'>" + questionObject.question + "</div>");
  // and then appends the questionDiv var with all the question divs inside the questionContainer with the one questions div:
  questionContainer.append(questionDiv);
  // this sets up a answers div to the page
  var answersDiv = $("<div class='answers'>");
  // and then you have to do another four loop (since the answers are all in arrays):
  for (var a = 0; a < questionObjects.answers.length; a++) {
    // and this makes individual little answer divs inside that answers div:
    var answerDiv = $("<div class='answer'>" + questionObjects.answers[a] + "</div>");
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

