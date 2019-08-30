import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'


export default function GameThreeA(props) {
  return (
    <div className="backgroundGamesA">
        {props.state.question !== 0 &&  
        <div className="question">
          <h2> Click on the right picture of the {props.state.breedsA[Math.floor(props.state.question % props.state.breedsA.length)]}</h2>
        </div>}
        <div>
          
          {props.state.rightArrayA.length === 0 && props.state.question !== 0 ? 
          <div className="answerBtn"><h2 onClick={props.getAnswers}>click for answers</h2></div> : ''}
          {props.state.shuffleArrayA.length === 3 && <div>
            <img className="img" id={props.state.shuffleArrayA[0]} src={props.state.shuffleArrayA[0]} alt="doggie" 
            onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArrayA[1]} src={props.state.shuffleArrayA[1]} alt="doggie"
            onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArrayA[2]} src={props.state.shuffleArrayA[2]} alt="doggie" 
            onClick={props.checkAnswer} />
          </div>}

          {props.state.shuffleArrayA.length === 1 && <img className="img" id={props.state.shuffleArrayA[0]} src={props.state.shuffleArrayA[0]} alt="doggie" 
            onClick={props.checkAnswer} />}
        </div>
        <Link to='/overview' ><div className="link" ><h2>Click to go back to the overview page</h2></div></Link>
    </div>
  )
}