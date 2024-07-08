const quizData = [
    {
        question: "What is the fastest stroke in swimming?",
        a: "Breaststroke",
        b: "Butterfly",
        c: "Backstroke",
        d: "Freestyle",
        correct: "d"
    },
    {
        question: "Which of these is an Olympic swimming distance?",
        a: "25 meters",
        b: "50 meters",
        c: "75 meters",
        d: "150 meters",
        correct: "b"
    },
    {
        question: "Who is known as the greatest swimmer of all time?",
        a: "Michael Phelps",
        b: "Ian Thorpe",
        c: "Mark Spitz",
        d: "Ryan Lochte",
        correct: "a"
    },
    {
        question: "What is the standard length of an Olympic swimming pool?",
        a: "25 meters",
        b: "50 meters",
        c: "75 meters",
        d: "100 meters",
        correct: "b"
    },
    {
        question: "How many individual swimming events are there in the Olympics?",
        a: "10",
        b: "15",
        c: "8",
        d: "13",
        correct: "d"
    }
];

const quiz = document.getElementById("quiz-question");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion) {
            if (letter !== "question" && letter !== "correct") {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion[letter]}
                    </label>`
                );
            }
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quiz.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quiz.querySelectorAll(".answers");
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "green";
        } else {
            answerContainers[questionNumber].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
