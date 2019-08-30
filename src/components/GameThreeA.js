import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'

export default function GameThreeA(props) {
  return (
    <div>


      {props.state.question !== 0 &&
        <div>
          <h2> Click on the right picture of the {props.state.breedsA[Math.floor(props.state.question % props.state.breedsA.length)]}</h2>
        </div>}
      <div>

        {props.state.rightArrayA.length === 0 && props.state.question !== 0 ?
          <button onClick={props.getAnswers}>click for answers</button> : ''}
        {props.state.shuffleArrayA.length === 3 && <div>
          <img className="img" id={props.state.shuffleArrayA[0]} src={props.state.shuffleArrayA[0]} alt="doggie"
            onClick={props.checkAnswer} />
          <img className="img" id={props.state.shuffleArrayA[1]} src={props.state.shuffleArrayA[1]} alt="doggie"
            onClick={props.checkAnswer} />
          <img className="img" id={props.state.shuffleArrayA[2]} src={props.state.shuffleArrayA[2]} alt="doggie"
            onClick={props.checkAnswer} />
        </div>}

        <div>
          {props.state.showHintButton === true && props.state.rightArrayA.length !== 0 && props.state.shuffleArrayA.length === 3 ?
            <button onClick={props.getHintA}>Click for a hint</button> : ''}
        </div>

        {props.state.shuffleArrayA.length === 2 &&
          <div>
            <img className="img" id={props.state.shuffleArrayA[0]} src={props.state.shuffleArrayA[0]} alt="doggie"
              onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArrayA[1]} src={props.state.shuffleArrayA[1]} alt="doggie"
              onClick={props.checkAnswer} />
          </div>}

        {props.state.shuffleArrayA.length === 1 && <img className="img" id={props.state.shuffleArrayA[0]} src={props.state.shuffleArrayA[0]} alt="doggie"
          onClick={props.checkAnswer} />}
      </div>
      <Link to='/overview' >Click to go back to the overview page</Link>
    </div>
  )
}