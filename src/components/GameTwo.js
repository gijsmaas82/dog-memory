import React from 'react'
import { Link } from 'react-router-dom';
import './GameTwo.css'

export default function GameTwo(props) {
  return (
    <div>
      <div>
        <h2>points: {props.state.points}/15 streak: {props.state.streak} streakCounter: {props.state.streakCounter} </h2>
      </div>
      {props.state.question === 0 && <button onClick={props.firstQuestion} > Click for the first question </button>}
      {props.state.question !== 0 &&
        <div>
          <h1>question: {props.state.question}</h1>
          <h2> Which dogbreed is shown on this picture?</h2>
          <img className="img" src={props.state.breeds[Math.floor(props.state.question % props.state.breeds.length)]} alt="doggie" />
        </div>}
      <div>

        {props.state.rightArray.length === 0 && props.state.question !== 0 ?
          <button onClick={props.getAnswers}>click for answers</button> : ''}
        {props.state.rightArray.length !== 0 && 
        <div>
          <h2 onClick={props.checkAnswer} id={props.state.shuffleArray[0]}> {props.state.shuffleArray[0]}</h2>
          <h2 onClick={props.checkAnswer} id={props.state.shuffleArray[1]}> {props.state.shuffleArray[1]}</h2>
          <h2 onClick={props.checkAnswer} id={props.state.shuffleArray[2]}> {props.state.shuffleArray[2]}</h2>
        </div>}
          <div>
            {props.state.showHintButton === true && props.state.rightArray.length !== 0 ?
             <button onClick={props.getHint}>Click for a hint</button> : ''}
        </div>
       
      </div>
      <Link to='/overview' > Click to go back to the overview page</Link>
    </div>
  )
}