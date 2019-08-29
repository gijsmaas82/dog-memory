import React from 'react'

export default function UserStats(props) {
  return (
    <div>
      <h2> Name: {props.stats.name}  
      Points: {props.stats.points} 
      Streaks: {props.stats.streaks} 
      Level: {props.level.currentLevel} 
      Streaks: {props.level.streakLevel}</h2>
    </div>
  )
}
