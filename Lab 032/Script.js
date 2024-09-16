const questions = [
    {
        question: "Quantas vezes Michael Shumacher venceu o Campeonato Mundial?",
        answers: [
            "4",
            "8",
            "6",
            "7"],
        correctAnswer: 3
    },
    {
        question: "Qual circuito tem a famosa curva Eau Rouge?",
        answers: [
            "Circuito de Monza", 
            "Circuito Paul Ricard",
            "Circuito de Spa-Francochamps",
            "Circuita de Interlagos"],
        correctAnswer: 2
    },
    {
        question: "Qual era o rival de Niki Lauda?\n<p id='demo'>This is a demonstration.</p>",
        answers: [
            "Pablo Montoya",
            "James Hunt",
            "Alan Prost",
            "Jacques Villeneuve"
        ],
        correctAnswer: 1
    },
    {
        question: "Quantas vezes Ayrton Senna foi Campeão Mundial?\n<p id='demo'>This is a demonstration.</p>",
        answers: [
            "4",
            "3",
            "2",
            "5"
        ],
        correctAnswer: 1
    },
    {
        question: "Quantas voltas ao mundo Lewis Hamiltol deu em corridas?\n<p id='demo'>This is a demonstration.</p>",
        answers: [
            "2 e meia",
            "Nenhuma",
            "3",
            "1"
        ],
        correctAnswer: 0
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;