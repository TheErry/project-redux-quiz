import React from 'react'
import { useSelector } from 'react-redux'

export const QuestionTitle = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  return (
    <h1>{question.questionText}</h1>
  )
}