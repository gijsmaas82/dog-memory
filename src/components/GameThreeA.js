import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default function GameThreeA(props) {
  return (
    <div> 
      
        
        {props.state.question !== 0 &&  
        <div>
          <h2> Click on the right picture of the {props.state.breedsA[Math.floor(props.state.question % props.state.breedsA.length)]}</h2>
        </div>}
        <div>
          
          {props.state.rightArrayA.length === 0 && props.state.question !== 0 ? 
          <button onClick={props.getAnswers}>
           <KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) => 
            props.getAnswers({target: {className: "buttonAnswer"}}) }/>

            click for answers</button> : ''}
          {props.state.rightArrayA.length !== 0 && <div>


              <KeyboardEventHandler handleKeys={['1']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArrayA[0]}}) }/>
              <KeyboardEventHandler handleKeys={['2']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArrayA[1]}}) }/>
              <KeyboardEventHandler handleKeys={['3']} onKeyEvent={(key) => props.checkAnswer({target: {id: props.state.shuffleArrayA[2]}}) }/>


            <img className="img" id={props.state.shuffleArrayA[0]} src={props.state.shuffleArrayA[0]} alt="doggie" 
            onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArrayA[1]} src={props.state.shuffleArrayA[1]} alt="doggie"
            onClick={props.checkAnswer} />
            <img className="img" id={props.state.shuffleArrayA[2]} src={props.state.shuffleArrayA[2]} alt="doggie" 
            onClick={props.checkAnswer} />
          </div>}
        </div>
        <Link to='/overview' >Click to go back to the overview page</Link>
    </div>
  )
}