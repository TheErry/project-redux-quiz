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
      // eslint-disable-next-line global-require
      animationData: require('../assets/animations/fireworks.json')
    })
  }, [])

  return (
    <div>
      <div className="lottieContainer" ref={lottieContainer} />
      {answers.map((answer) => (
        <div>
          <p>Your answer: {answer.answer}</p>
          <p>{answer.isCorrect ? '✅ ' : '✖'}</p>
        </div>
      ))}
    </div>
  )
}
