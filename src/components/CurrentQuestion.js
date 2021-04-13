import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { QuestionTitle } from './QuestionTitle'
import { AnswerOptions } from './AnswerOptions'
import { QuestionCounter } from './QuestionCounter'
import { NextQuestionButton } from './NextQuestionButton'
import { SummaryText } from './SummaryText'
import { FinalScore } from './FinalScore'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const summary = useSelector((state) => state.quiz.quizOver)
  const [start, setStart] = useState(true)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      {start === true && (
        <>
          <h1>Welcome to the Movie Quiz 🎥</h1>
          <p>Disclaimer: This is not a Nicolas Cage quiz</p>
          <button type="button" onClick={() => setStart(false)}> Start Quiz </button>
        </>
      )}
      {start === false && (
        <div>
          {summary === false && (
            <div>
              <QuestionTitle />
              <AnswerOptions />
              <QuestionCounter />
              <NextQuestionButton />
            </div>
          )}
          {summary === true && (
            <div>
              <SummaryText />
              <FinalScore />
            </div>
          )}
        </div>
      )}
    </>
  )
}