import React from 'react'
import { useSelector } from 'react-redux'

export const QuestionCounter = () => {
const questionCount = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].id)

    return (
        <p>Question {questionCount} out of 5</p>
    )
    }