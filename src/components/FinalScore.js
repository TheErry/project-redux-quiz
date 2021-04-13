import React from 'react'
import { useSelector } from 'react-redux'

export const FinalScore = () => {
  const answers = useSelector((state) => state.quiz.answers)

  return (
    <div>
      {answers.map((answer) => (
        <div>
          <p>{answer.answer}</p>
          <p>{answer.isCorrect ? '✅ ' : '✖'}</p>
        </div>
      ))}
    </div>
  )
}
