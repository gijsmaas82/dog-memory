import React from 'react'
import { Link } from 'react-router-dom';

export default function GameOver() {
  return (
    <div>
      <h1>congratulations!</h1>
      <Link to='/overview' >Click to go back to the overview page</Link>
    </div>
  )
}
