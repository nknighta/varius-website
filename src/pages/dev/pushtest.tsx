import React, { useState } from 'react'

export default function MyComponent() {
  const [keyPressed, setKeyPressed] = useState('')
  
  const handleKeyDown = (event) => {
    setKeyPressed(event.key)
  }
  
  return (
    <div>
      <p>Pressed key: {keyPressed}</p>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  )
}
