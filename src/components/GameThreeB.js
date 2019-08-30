import React from 'react'
import { Link } from 'react-router-dom';
import './GameOne.css'
import KeyboardEventHandler from 'react-keyboard-event-handler';


export default function GameThreeB(props) {
  return (
    <div>
      {props.state.question === 0 ? '' : 
      <div>
        <div>
          <h2> What type of dog is this? </h2>
          <img src={props.state.breedsB[Math.floor(props.state.question % props.state.breedsB.length)]} />
        </div>
        <div>
        {props.state.rightArrayB.length === 0 && props.state.question !== 0 ? 
          <button onClick={props.getAnswers}>
            <KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) => 
            props.getAnswers({target: {}}) }/>            
            click for answers</button> : ''}
          {props.state.rightArrayB.length !== 0 && <div>

            <KeyboardEventHandler handleKeys={['1']} onKeyEvent={(key) => 
                props.checkAnswer({target: {id: props.state.shuffleArrayB[0]}}) }/>
              <KeyboardEventHandler handleKeys={['2']} onKeyEvent={(key) => 
                props.checkAnswer({target: {id: props.state.shuffleArrayB[1]}}) }/>
              <KeyboardEventHandler handleKeys={['3']} onKeyEvent={(key) => 
                props.checkAnswer({target: {id: props.state.shuffleArrayB[2]}}) }/>


            <h2 id={props.state.shuffleArrayB[0]} onClick={props.checkAnswer} > {props.state.shuffleArrayB[0]}</h2>
            <h2 id={props.state.shuffleArrayB[1]} onClick={props.checkAnswer} > {props.state.shuffleArrayB[1]}</h2>
            <h2 id={props.state.shuffleArrayB[2]} onClick={props.checkAnswer} > {props.state.shuffleArrayB[2]}</h2>
          </div>}
          <div>
              {props.state.showHintButton === true && props.state.rightArrayB.length !== 0 && props.state.shuffleArrayB.length === 3 ?
                <button onClick={props.getHintB}>Click for a hint</button> : ''}
            </div>
        </div>  
      </div>}

      
      <div> 
      <Link to='/overview' >Click to go back to the overview page</Link>
      </div>
    </div>
  )
}
