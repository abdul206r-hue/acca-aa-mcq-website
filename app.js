class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = {};
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        console.log(`Question ${this.currentQuestionIndex + 1}: ${question.text}`);
        question.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }

    answerQuestion(answer) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers[this.currentQuestionIndex] = answer;
        if (answer === question.correctAnswer) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }

    calculateScore() {
        return (this.score / this.questions.length) * 100;
    }

    displayResults() {
        console.log(`Your score is: ${this.calculateScore()}%`);
    }

    handleQuestionType(question) {
        switch (question.type) {
            case 'STANDARD_MCQ':
                this.addQuestion(question);
                break;
            case 'MATCHING':
                // Handle matching question logic
                break;
            case 'MULTI_SELECT_COLUMNS':
                // Handle multi-select column logic
                break;
            case 'MULTI_SELECT_ROWS':
                // Handle multi-select row logic
                break;
            case 'SELECT_TWO':
                // Handle select two question logic
                break;
            default:
                throw new Error('Unknown question type');
        }
    }
}