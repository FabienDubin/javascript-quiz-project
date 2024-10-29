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
  shuffleQuestions() {
    // The fancy Fisher-Yates shuffle
    // for (let i = this.questions.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [this.questions[i], this.questions[j]] = [
    //     this.questions[j],
    //     this.questions[i],
    //   ];
    // }
    const randomArray = [];
    for (let i = this.questions.length - 1; i >= 0; i--) {
      const randomIndex = Math.ceil(Math.random() * this.questions.length);
      randomArray.push(this.questions.splice(randomIndex, 1)[0]);
    }
    return this.questions;
  }

  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      /// Find how to do
      return this.correctAnswers++;
    }
  }
  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }
}
