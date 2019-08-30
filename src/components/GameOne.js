import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'
import UserStatsContainer from './UserStatsContainer'
import KeyboardEventHandler from 'react-keyboard-event-handler'
export default function GameOne(props) {
  return (
    <div>
      <UserStatsContainer />
      <div className="backgroundGames">
        <div className="headerGames">
          <h2>Points: {props.state.points}/15</h2>
          <h2>Streak: {props.state.streak}</h2>
          <h2>StreakCounter: {props.state.streakCounter}</h2>
        </div >
        {props.state.question === 0 && <div className="startBtn"><h2 onClick={props.firstQuestion} ><KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) =>
          props.firstQuestion({ target: { className: "startBtn" } })} /> Click for the first question </h2></div>}
        {props.state.question !== 0 &&
          <div className="question">
            <h1>Question: {props.state.question}</h1>
            <h2> Click on the right picture of the {props.state.breeds[Math.floor(props.state.question % props.state.breeds.length)]}</h2>
          </div>}
        <div>
          {props.state.rightArray.length === 0 && props.state.question !== 0 ?
            <div className="answerBtn"><h2 onClick={props.getAnswers}>
              <KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) =>
                props.getAnswers({ target: { className: "answerBtn" } })} />click for answers</h2></div> : ''}
          {props.state.shuffleArray.length === 3 && <div className="gameImages" >
            <KeyboardEventHandler handleKeys={['1']} onKeyEvent={(key) => props.checkAnswer({ target: { id: props.state.shuffleArray[0] } })} />
            <KeyboardEventHandler handleKeys={['2']} onKeyEvent={(key) => props.checkAnswer({ target: { id: props.state.shuffleArray[1] } })} />
            <KeyboardEventHandler handleKeys={['3']} onKeyEvent={(key) => props.checkAnswer({ target: { id: props.state.shuffleArray[2] } })} />
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
          {props.state.shuffleArray.length === 1 && <div>
            <img className="img" id={props.state.shuffleArray[0]} src={props.state.shuffleArray[0]} alt="doggie"
              onClick={props.checkAnswer} />
          </div>}
        </div>
        <Link to='/overview' ><div className="link" ><h2>Click to go back to the overview page</h2></div></Link>
      </div>
    </div>
  )
}
