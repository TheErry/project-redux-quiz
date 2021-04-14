import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const NextQuestionButton = () => {
    const dispatch = useDispatch()
    const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])

    return (
        <button 
        type="button" 
        onClick={() => dispatch(quiz.actions.goToNextQuestion())} disabled={!answer}
        >
        Next Question
        </button>
    )
}
