import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'
import KeyboardEventHandler from 'react-keyboard-event-handler'


export default function GameThreeB(props) {
  return (
    <div className="backgroundGamesA" >
      {props.state.question === 0 ? '' : 
      <div>
        <div className="question">
          <h2> What type of dog is this? </h2>
          <img className="img" src={props.state.breedsB[Math.floor(props.state.question % props.state.breedsB.length)]} />
        </div>
        <div>
        {props.state.rightArrayB.length === 0 && props.state.question !== 0 ? 
          <div className="answerBtn"><h2 onClick={props.getAnswers}>
                <KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) => 
            props.getAnswers({target: {className: "answerBtn"}}) }/>
            click for answers</h2></div> : ''}
          {props.state.rightArrayB.length !== 0 && <div className="question">
           
           
              <KeyboardEventHandler handleKeys={['1']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArrayB[0]}}) }/>
              <KeyboardEventHandler handleKeys={['2']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArrayB[1]}}) }/>
              <KeyboardEventHandler handleKeys={['3']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArrayB[2]}}) }/>

           
           
            <h2 id={props.state.shuffleArrayB[0]} onClick={props.checkAnswer} > {props.state.shuffleArrayB[0]}</h2>
            <h2 id={props.state.shuffleArrayB[1]} onClick={props.checkAnswer} > {props.state.shuffleArrayB[1]}</h2>
            <h2 id={props.state.shuffleArrayB[2]} onClick={props.checkAnswer} > {props.state.shuffleArrayB[2]}</h2>
          </div>}
        </div>  
      </div>}
      <div> 
      <Link to='/overview' ><div className="link" ><h2>Click to go back to the overview page</h2></div></Link>
      </div>
    </div>
  )
}
