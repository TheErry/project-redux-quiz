
import React, { useState } from 'react'

export const StartPage = () => {
const [start, setStart] = useState(true)

return (
    <div>
        <h1>Welcome to the Movie Quiz 🎥</h1>
        <p>Disclaimer: This is not a Nicolas Cage quiz</p>
        <button type="button" onClick={() => setStart(false)}> Start Quiz </button>
    </div>
)
}
     