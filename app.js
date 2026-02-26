// JavaScript logic for quiz flow, tracking, random selection, and results

const quizData = [
    { question: 'What is the capital of France?', answers: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 2 },
    { question: 'Which planet is known as the Red Planet?', answers: ['Earth', 'Mars', 'Jupiter', 'Venus'], correct: 1 },
    { question: 'Who wrote "To Kill a Mockingbird"?', answers: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'], correct: 0 },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

// Function to display the current question
function displayQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        console.log(currentQuestion.question);
        console.log('Answers: ' + currentQuestion.answers.join(', '));
    } else {
        displayResults();
    }
}

// Function to handle answer selection
function selectAnswer(answerIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (answerIndex === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

// Function to display the results
function displayResults() {
    console.log(`Quiz finished! Your score is ${score} out of ${quizData.length}.`);
}

// Start the quiz when the script is executed
startQuiz();
