import React from 'react'
import { Link } from 'react-router-dom';
import './GameOver.css'
import UserStatsContainer from './UserStatsContainer'

export default function GameOver() {
  return (
    <div className="gameOverScreen">
      <UserStatsContainer />
      <div className="gameOverTitle"><h1>Congratulations!</h1></div>
      <Link to='/overview' ><div className="link2" ><h2>Click to go back to the overview page</h2></div></Link>
    </div>
  )
}
