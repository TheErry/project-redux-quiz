import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const checkAnswer = useSelector((state) => state.isCorrect)
  const dispatch = useDispatch()

  const handleAnswer = (item) => {
    const answerIndexOf = question.options.indexOf(item)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: answerIndexOf }))
  }
  console.log(question)
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (checkAnswer) {
    console.log('yay')
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map(item => (
        <div key={item}>
          <input type="radio" name="answer" value={item} onClick={() => handleAnswer(item)} required />
          <label htmlFor={item}>{item}</label>
          {console.log(item)}
        </div>
      ))}
      <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
    </div>
  )
}
