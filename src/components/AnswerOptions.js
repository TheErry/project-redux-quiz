import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const AnswerOptions = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const checkAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  const handleAnswer = (item) => {
    const answerIndexOf = question.options.indexOf(item)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: answerIndexOf }))
  }

  let a

  if (checkAnswer !== undefined) {
    if (checkAnswer.isCorrect) {
      a = '✅'
    } else if (!checkAnswer.isCorrect) {
      a = '✖'
    }
  }

  return (
    <div className="radio-buttons">
      {question.options.map((item) => (
        <div className="radio-buttons" key={item}>
          <input
            type="radio"
            name="answer"
            id={item}
            value={item}
            onClick={() => handleAnswer(item)}
            disabled={checkAnswer}
            required />
          <label htmlFor={item} for={item}>{item}</label>
        </div>
      ))}
      <span className="feedback-emoji">{a}</span>
    </div>
  )
}