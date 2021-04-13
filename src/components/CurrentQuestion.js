import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const checkAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const summary = useSelector((state) => state.quiz.quizOver)
  const answers = useSelector((state) => state.quiz.answers)
  const questionCount = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].id)
  const dispatch = useDispatch()

  console.log(questionCount)

  const handleAnswer = (item) => {
    const answerIndexOf = question.options.indexOf(item)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: answerIndexOf }))
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
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
    <>  
    {summary === false && (      
      <div>
        <h1>Question: {question.questionText}</h1>
        {question.options.map((item) => (
          <div key={item}>
            <input type="radio" name="answer" value={item} onClick={() => handleAnswer(item)} disabled={checkAnswer} required />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
        <p>{a}</p>
        <p>Question {questionCount} out of 5</p> 
        <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
      </div>
        )}
        {summary === true && (
        <div>
            <p>Done{console.log(answers)}</p>
            {answers.map((answer) => (
              <div> 
                <p>{answer.answer}</p>
                <p>{answer.isCorrect ? "✅ " : "✖" }</p>
              </div>
            ))}
        </div>    
        )}
    </>
  )
}