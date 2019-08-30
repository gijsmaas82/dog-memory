import React from 'react'
import './UserStats.css'

export default function UserStats(props) {
  return (
    <div className="userStats">
      <h2>Name: {props.stats.name} </h2>
      <h2>Points: {props.stats.points} </h2>
      <h2>Streaks: {props.stats.streaks} </h2>
      <h2>Level: {props.level.currentLevel} </h2>
      <h2>Streaks: {props.level.streakLevel}</h2>
    </div>
  )
}
