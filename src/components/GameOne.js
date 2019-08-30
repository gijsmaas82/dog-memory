import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'

export default function GameOne(props) {
  return (
    <div className="backgroundGames">
      <div className="headerGames">
        <h2>Points: {props.state.points}/15</h2>
        <h2>Streak: {props.state.streak}</h2>
        <h2>StreakCounter: {props.state.streakCounter}</h2>
      </div >
      {props.state.question === 0 && <div className="startBtn"><h2 onClick={props.firstQuestion} > Click for the first question </h2></div>}
      {props.state.question !== 0 &&
        <div className="question">
          <h1>Question: {props.state.question}</h1>
          <h2> Click on the right picture of the {props.state.breeds[Math.floor(props.state.question % props.state.breeds.length)]}</h2>
        </div>}
      <div>

        {props.state.rightArray.length === 0 && props.state.question !== 0 ?
          <div className="answerBtn"><h2 onClick={props.getAnswers}>click for answers</h2></div> : ''}
        {props.state.shuffleArray.length === 3 &&
          <div className="images" >
            <img className="img" id={props.state.shuffleArray[0]} src={props.state.shuffleArray[0]} alt="doggie"
              onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArray[1]} src={props.state.shuffleArray[1]} alt="doggie"
              onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArray[2]} src={props.state.shuffleArray[2]} alt="doggie"
              onClick={props.checkAnswer} />
          </div>}

        <div>
          {props.state.showHintButton === true && props.state.rightArray.length !== 0 && props.state.shuffleArray.length === 3 ?
            <button onClick={props.getHint}>Click for a hint</button> : ''}
        </div>

        {props.state.shuffleArray.length === 2 &&
          <div>
            <img className="img" id={props.state.shuffleArray[0]} src={props.state.shuffleArray[0]} alt="doggie"
              onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArray[1]} src={props.state.shuffleArray[1]} alt="doggie"
              onClick={props.checkAnswer} />
          </div>}

        {props.state.shuffleArray.length === 1 &&
          <div>
            <img className="img" id={props.state.shuffleArray[0]} src={props.state.shuffleArray[0]} alt="doggie"
              onClick={props.checkAnswer} />
          </div>}
      </div>

      <Link to='/overview' ><div className="link" ><h2>Click to go back to the overview page</h2></div></Link>
    </div>
  )
}
