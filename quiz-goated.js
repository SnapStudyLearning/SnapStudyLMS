
const questions = [
  {
    word: "astounding",
    options: ["boring", "shocking", "quiet", "normal"],
    answer: "shocking"
  },
  {
    word: "meticulous",
    options: ["messy", "careful", "fast", "tired"],
    answer: "careful"
  }
];

let current = 0;
let score = 0;
let coins = 0;
let userId = "";

auth.onAuthStateChanged(user => {
  if (user) {
    userId = user.uid;
    renderQuestion();
  } else {
    window.location.href = "login.html";
  }
});

function renderQuestion() {
  const q = questions[current];
  const container = document.getElementById("question-container");
  container.innerHTML = `
    <h3>${q.word}</h3>
    ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join('')}
  `;
}

function checkAnswer(selected) {
  const correct = questions[current].answer;
  const correctSound = document.getElementById("correct-sound");
  const wrongSound = document.getElementById("wrong-sound");

  if (selected === correct) {
    score++;
    coins += 5;
    correctSound.play();
  } else {
    wrongSound.play();
  }

  document.getElementById("score-display").innerText = "Score: " + score;
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    saveResults();
  }
}

function saveResults() {
  let badge = "";
  if (score === questions.length) badge = "quizChamp";
  db.collection("users").doc(userId).set({
    score: score,
    coins: coins,
    badges: firebase.firestore.FieldValue.arrayUnion(badge)
  }, { merge: true }).then(() => {
    alert("Saved! Score: " + score + " | Coins: " + coins);
    window.location.href = "leaderboard.html";
  });
}
