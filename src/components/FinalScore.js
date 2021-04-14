import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import lottie from 'lottie-web'

export const FinalScore = () => {
  const answers = useSelector((state) => state.quiz.answers)

  const lottieContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/animations/fireworks.json')
    })
  }, [])

  return (
    <div>
                <p>You answered:</p>
      <div className="lottieContainer" ref={lottieContainer} />
      {answers.map((answer) => (
        <div className="summary-text">

          <p><span className="your-answer-text">{answer.answer}</span></p>
          <p>{answer.isCorrect ? <span className="feedback-emoji-correct" role="img" aria-label="checkmark">✅</span> : <span className="feedback-emoji" aria-label="x-mark">✖</span>}</p>
        </div>
      ))}
    </div>
  )
}
