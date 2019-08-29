import React from 'react'
import { Link } from 'react-router-dom';
import './GameTwo.css'
import KeyboardEventHandler from 'react-keyboard-event-handler';


export default function GameTwo(props) {
  return (
    <div>
      <div>
        <h2>points: {props.state.points}/15 streak: {props.state.streak} streakCounter: {props.state.streakCounter} </h2>
      </div>
      {props.state.question === 0 && <button onClick={props.firstQuestion}  > 
      <KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) => 
            props.firstQuestion({target: {className: "buttonQuestion"}}) }/>Click for the first question </button>}
      {props.state.question !== 0 &&
        <div>
          <h1>question: {props.state.question}</h1>
          <h2> Which dogbreed is shown on this picture?</h2>
          <img className="img" src={props.state.breeds[Math.floor(props.state.question % props.state.breeds.length)]} alt="doggie" />
        </div>}
      <div>

        {props.state.rightArray.length === 0 && props.state.question !== 0 ?
          <button className="buttonAnswer" onClick={props.getAnswers}>
             <KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) => 
            props.getAnswers({target: {className: "buttonAnswer"}}) }/>
            click for answers</button> : ''}
        {props.state.rightArray.length !== 0 && 
        <div>


              <KeyboardEventHandler handleKeys={['1']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArray[0]}}) }/>
              <KeyboardEventHandler handleKeys={['2']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArray[1]}}) }/>
              <KeyboardEventHandler handleKeys={['3']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArray[2]}}) }/>

          <button onClick={props.checkAnswer} onKeyDown={props.handleKeyDown}  id={props.state.shuffleArray[0]}> {props.state.shuffleArray[0]}</button>
          <button onClick={props.checkAnswer} id={props.state.shuffleArray[1]}> {props.state.shuffleArray[1]}</button>
          <button onClick={props.checkAnswer} id={props.state.shuffleArray[2]}> {props.state.shuffleArray[2]}</button>
        </div>}
      </div>
      <Link to='/overview' > Click to go back to the overview page</Link>
    </div>
  )
}