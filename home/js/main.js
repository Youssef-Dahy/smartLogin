const quizData = [
  {
    question: "How old is Youssef ?",
    a: "20",
    b: "23",
    c: "26",
    d: "30",
    correct: "b",
  },
  {
    question: "What is the best programming language I used in 2023 ?",
    a: "Java",
    b: "JavaScript",
    c: "C",
    d: "C#",
    correct: "b",
  },
  {
    question: "What is My Favorite Color ?",
    a: "Red",
    b: "Black",
    c: "Grey",
    d: "Blue",
    correct: "b",
  },
  {
    question: "What is My favorite hobby ?",
    a: "Playing Chess",
    b: "Reading",
    c: "Writing",
    d: "Playing Football",
    correct: "a",
  },
  {
    question: "Who is My Favorite Player ? ",
    a: "Mohammed Salah",
    b: "Cristiano Ronaldo",
    c: "Neymar",
    d: "Lionel Messi",
    correct: "d",
  },
  {
    question: "What is my favorite team ? ",
    a: "FC Barcelona",
    b: "Man city",
    c: "Real madrid",
    d: "Arsenal fc",
    correct: "a",
  },
  {
    question: "Who is my favorite Actor ? ",
    a: "karim Abdel Aziz",
    b: "Ahmed Ezz",
    c: "Ahmed Mekky",
    d: "Ahmed Helmy",
    correct: "a",
  },
  {
    question: "Who is my favorite Singer ? ",
    a: "Amr Diab",
    b: "Ramy Gamal",
    c: "Tamer Ashour",
    d: "Tamer Hosny",
    correct: "d",
  },
  {
    question: "What is my favorite Movie ? ",
    a: "Fast and furious",
    b: "Pirates Of The caribbean",
    c: "Harry Potter",
    d: "The Hobbit",
    correct: "c",
  },
  {
    question: "What is my favorite series ? ",
    a: "Prison Break",
    b: "La casa de Papel",
    c: "See",
    d: "The Blacklist",
    correct: "b",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const logoutBtn = document.getElementById("logoutBtn");

let currentQuiz = 0;
let score = 0;
let answer = undefined;
loadQuiz();
function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<div class="alert alert-danger text-center p-1">You answered correctly at ${score}/${quizData.length} questions.</div> <button class="submit-btn btn btn-info mt-5 w-100" onclick="location.reload()">Reload</button>`;
    }
  }
});
logoutBtn.addEventListener("click", function () {
  window.location.href = "../index.html";
});
