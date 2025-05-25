import React, { useState } from 'react'
import QuestionList from './QuestionList'
import './Quiz.css'

function Quiz() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is capital of India?",
            options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
            answer: "Delhi"
        },
        {
            question: "What is capital of USA?",
            options: ["New York", "Los Angeles", "Chicago", "Houston"],
            answer: "New York"
        }
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleClick = (option) => {
        setCurrentAnswer(option);
    }

    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const handleNextQuestion = () => {
        if (currentAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        
        if (isLastQuestion) {
            setShowScore(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentAnswer(null);
        }
    };

    if (showScore) {
        return (
            <div>
                <h2>Quiz completed!</h2>
                <p>Your score: {score} out of {questions.length}</p>
            </div>
        );
    }

    return (
        <div> 
            <QuestionList 
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options} 
                handleClick={handleClick}
                currentAnswer={currentAnswer}
            />
            <button 
                disabled={currentAnswer === null} 
                className={currentAnswer === null ? 'button-disable' : 'button'}
                onClick={handleNextQuestion}
            >
                {isLastQuestion ? 'Finish Quiz' : 'Next question'}
            </button>
        </div>
  )
}

export default Quiz
