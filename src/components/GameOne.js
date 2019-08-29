import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'

export default function GameOne(props) {
  return (
    <div> 
      <div>
          <h2>points: {props.state.points}/15 streak: {props.state.streak} streakCounter: {props.state.streakCounter} </h2> 
       </div>
        {props.state.question === 0 && <button onClick={props.firstQuestion} > Click for the first question </button>}
        {props.state.question !== 0 &&  
        <div>
          <h1>question: {props.state.question}</h1>
          <h2> Click on the right picture of the {props.state.breeds[Math.floor(props.state.question % props.state.breeds.length)]}</h2>
        </div>}
        <div>
          
          {props.state.rightArray.length === 0 && props.state.question !== 0 ? 
          <button onClick={props.getAnswers}>click for answers</button> : ''}
          {props.state.shuffleArray.length === 3 && <div>
            <img className="img" id={props.state.shuffleArray[0]} src={props.state.shuffleArray[0]} alt="doggie" 
            onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArray[1]} src={props.state.shuffleArray[1]} alt="doggie"
            onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArray[2]} src={props.state.shuffleArray[2]} alt="doggie" 
            onClick={props.checkAnswer} />
          </div>}
          
          {props.state.shuffleArray.length === 1 && <div>
            <img className="img" id={props.state.shuffleArray[0]} src={props.state.shuffleArray[0]} alt="doggie" 
            onClick={props.checkAnswer} />
          </div> }
        </div>
        <Link to='/overview' >Click to go back to the overview page</Link>
    </div>
  )
}
