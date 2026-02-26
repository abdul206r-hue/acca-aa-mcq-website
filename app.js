class QuizApp {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
    }

    // Method to handle navigation to the next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
        }
    }

    // Method to handle navigation to the previous question
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
        }
    }

    // Method to submit an answer
    submitAnswer(answer) {
        this.answers[this.currentQuestionIndex] = answer;
        this.calculateScore();
    }

    // Method to calculate score based on submitted answers
    calculateScore() {
        this.score = this.answers.reduce((acc, answer, index) => {
            if (this.questions[index].correctAnswer === answer) {
                return acc + 1; // Increment score for correct answer
            }
            return acc;
        }, 0);
    }

    // Method to display results
    displayResults() {
        const resultContainer = document.getElementById('results');
        resultContainer.innerHTML = `<h2>Your score: ${this.score} / ${this.questions.length}</h2>`;
        this.questions.forEach((question, index) => {
            const explanation = question.explanation ? `<p>Explanation: ${question.explanation}</p>` : '';
            resultContainer.innerHTML += `<div><h3>Question ${index + 1}:</h3><p>Your answer: ${this.answers[index]}</p>${explanation}</div>`;
        });
    }
}

// Example usage:
const questions = [
    {
        question: 'What is the capital of France?',
        type: 'STANDARD_MCQ',
        options: ['Paris', 'London', 'Rome'],
        correctAnswer: 'Paris',
        explanation: 'Paris is the capital of France.'
    },
    {
        question: 'Match the countries with their capitals.',
        type: 'MATCHING',
        pairs: {
            'France': 'Paris',
            'Italy': 'Rome'
        },
        correctAnswer: ['Paris', 'Rome'],
        explanation: 'France capital is Paris and Italy capital is Rome.'
    }
    // Add other question types as needed
];

const quizApp = new QuizApp(questions);