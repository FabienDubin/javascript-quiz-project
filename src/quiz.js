class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(
    questions,
    timeLimit,
    timeRemaining,
    correctAnswers = 0,
    currentQuestionIndex = 0
  ) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = correctAnswers;
    this.currentQuestionIndex = currentQuestionIndex;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  // 4. shuffleQuestions()

  // 5. checkAnswer(answer)

  // 6. hasEnded()
}
