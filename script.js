const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const timerDisplay = document.getElementById("timer");
const resultBox = document.getElementById("result");
const endButtons = document.getElementById("end-buttons");

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer;

function loadQuestions() {
  const selectedCategory = localStorage.getItem("selectedCategory");
  if (!selectedCategory || !questionsData[selectedCategory]) {
    alert("Catégorie invalide.");
    window.location.href = "index.html";
    return;
  }
  const allQuestions = [...questionsData[selectedCategory]];
  allQuestions.sort(() => 0.5 - Math.random());
  currentQuestions = allQuestions.slice(0, 10);
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);
  if (currentIndex >= currentQuestions.length) {
    endQuiz();
    return;
  }
  const q = currentQuestions[currentIndex];
  questionContainer.innerText = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, opt === q.answer, q.answer);
    optionsContainer.appendChild(btn);
  });
  startTimer();
}

function startTimer() {
  let time = 10;
  timerDisplay.innerText = time;
  timer = setInterval(() => {
    time--;
    timerDisplay.innerText = time;
    if (time === 0) {
      clearInterval(timer);
      showCorrectAnswer(null);
    }
  }, 1000);
}

function checkAnswer(btn, correct, answer) {
  clearInterval(timer);
  if (correct) {
    btn.classList.add("correct");
    score++;
    setTimeout(nextQuestion, 1000);
  } else {
    btn.classList.add("incorrect");
    showCorrectAnswer(answer);
  }
}

function showCorrectAnswer(correctAnswer) {
  [...optionsContainer.children].forEach(btn => {
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    }
  });
  setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
  currentIndex++;
  showQuestion();
}

function endQuiz() {
  questionContainer.style.display = "none";
  optionsContainer.style.display = "none";
  timerDisplay.style.display = "none";
  resultBox.style.display = "block";
  endButtons.style.display = "block";

  let message = "peut mieux faire,réessayez";
  if (score >= 8) message = "Excellent, vous êtes doué !";
  else if (score >= 5) message = "Très bien, vous êtes bon !";

  resultBox.innerHTML = `<h2>Quiz terminé</h2><p>Vous avez répondu correctement à ${score} / 10</p><p>${message}</p>`;
}

function restartQuiz() {
  location.reload();
}

function goHome() {
  window.location.href = "index.html";
}

window.onload = loadQuestions;