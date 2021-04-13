import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import lottie from 'lottie-web'

import { quiz } from '../reducers/quiz'

export const AnswerOptions = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const checkAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  const handleAnswer = (item) => {
    const answerIndexOf = question.options.indexOf(item)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: answerIndexOf }))
  }

  const lottieContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      render: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../assets/animations/correctAnswer.json')
    })
  }, [])

  let a  

  if (checkAnswer !== undefined) {
    if (checkAnswer.isCorrect) {
      a = '✅'
    } else if (!checkAnswer.isCorrect) {
      a = '✖'
    }
  }

  return (
    <div>
      {question.options.map((item) => (
        <div key={item}>
          <input 
            type="radio" 
            name="answer" 
            value={item} 
            onClick={() => handleAnswer(item)} 
            disabled={checkAnswer} 
            required 
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
      <p>{a}</p>
      
    </div>
  )
}