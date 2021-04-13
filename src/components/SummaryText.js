import React from 'react'

export const SummaryText = () => {
  return (
    <div>
      <h1>Your Answer Summary</h1>
      <div className="text-and-emoji-container">
        <span className="emoji" role="img" aria-label="konfetti">🎉</span>
        <p>Well Done!</p>
        <span className="emoji" role="img" aria-label="konfetti">🎉</span>
      </div>
    </div>
  )
}