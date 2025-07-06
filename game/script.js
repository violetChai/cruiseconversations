const questions = [
  {
    question: "Which port is known for the Sydney Opera House?",
    options: ["Auckland", "Sydney", "Singapore", "Naples"],
    answer: "Sydney"
  },
  {
    question: "What ocean surrounds most Caribbean cruise destinations?",
    options: ["Pacific", "Indian", "Arctic", "Atlantic"],
    answer: "Atlantic"
  },
  {
    question: "Which sea is famous for ports like Barcelona and Venice?",
    options: ["Baltic Sea", "Red Sea", "Mediterranean Sea", "Coral Sea"],
    answer: "Mediterranean Sea"
  },
  {
    question: "Which cruise ship area is best for sunbathing?",
    options: ["Engine Room", "Dining Hall", "Lido Deck", "Bridge"],
    answer: "Lido Deck"
  },
  {
    question: "Which country is home to the port of Split?",
    options: ["Croatia", "Greece", "Italy", "Spain"],
    answer: "Croatia"
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById('question').innerText = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const result = document.getElementById('result');
  if (selected === questions[current].answer) {
    result.innerText = "✅ Correct! Sailing to the next port...";
    score++;
    document.getElementById('score').innerText = score;
  } else {
    result.innerText = `❌ Oops! The correct answer was "${questions[current].answer}".`;
  }

  current++;
  if (current < questions.length) {
    setTimeout(() => {
      result.innerText = "";
      showQuestion();
    }, 1500);
  } else {
    setTimeout(() => {
      result.innerText = `🏁 Cruise Complete! You visited ${score} out of ${questions.length} ports.`;
      document.getElementById('questionBox').style.display = 'none';
    }, 2000);
  }
}

showQuestion();
