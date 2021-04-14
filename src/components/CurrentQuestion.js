import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { QuestionTitle } from './QuestionTitle'
import { AnswerOptions } from './AnswerOptions'
import { QuestionCounter } from './QuestionCounter'
import { NextQuestionButton } from './NextQuestionButton'
import { SummaryText } from './SummaryText'
import { FinalScore } from './FinalScore'
import { RestartButton } from './RestartButton'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const summary = useSelector((state) => state.quiz.quizOver)
  const [start, setStart] = useState(true)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div className="main">
      {start === true && (
        <div className="start-page-container">
          <div className="text-and-emoji-container">
            <span className="emoji" role="img" aria-label="video-camera">🎥</span>
            <h1>Welcome to the Movie Quiz! </h1>
            <span className="emoji" role="img" aria-label="video-camera">🎥</span>
          </div>
          <button type="button" onClick={() => setStart(false)}> Start Quiz </button>
        </div>
      )}
      {start === false && (
        <div className="text-container">
          {summary === false && (
            <div className="question-container">
              <QuestionTitle />
              <AnswerOptions />
              <QuestionCounter />
              <NextQuestionButton />
            </div>
          )}
          {summary === true && (
            <div className="summary">
              <SummaryText />
              <FinalScore />
              <RestartButton />
            </div>
          )}
        </div>
      )}
    </div>
  )
}