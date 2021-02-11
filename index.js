const questions = document.querySelectorAll(
  ".content__accordion-item--question"
);

questions.forEach((item) => {
  item.addEventListener("click", (e) => {
    const activeQuestion = document.querySelector(".question-active");
    const activeAnswer = document.querySelector(".answer-active");
    const answer = item.nextElementSibling;

    if (activeQuestion && activeQuestion !== item) {
      activeQuestion.classList.remove("question-active");
      activeAnswer.classList.remove("answer-active");

      item.classList.toggle("question-active");
      answer.classList.toggle("answer-active");
    } else {
      item.classList.toggle("question-active");
      answer.classList.toggle("answer-active");
    }
  });
});
