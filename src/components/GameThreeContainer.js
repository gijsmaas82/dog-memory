import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import GameThreeA from './GameThreeA'
import GameThreeB from './GameThreeB'
import GameOver from './GameOver'
import UserStatsContainer from './UserStatsContainer'
import { addPoints } from '../actions/addPoints'
import { addStreak } from '../actions/addStreak'
import KeyboardEventHandler from 'react-keyboard-event-handler';



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);



class GameThreeContainer extends Component {
  state = {
    GameTypeA: true,
    question: 0,
    streak: 0,
    streakCounter: 0,
    points: 0,
    breedsA: [],
    breedsB: [],
    breedsBanswers: [],
    rightArrayA: [],
    shuffleArrayA: [],
    rightArrayB: [],
    shuffleArrayB: [],
    }

  firstQuestion = () => {
    this.setState({ question: this.state.question + 1})
    this.getRandomBreedsA()
    this.getRandomBreedsB()
  }

  getRandomBreedsA = () => {
    const newDogs = [this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]]
    this.setState({ breedsA: this.state.breedsA.concat(newDogs)})
  } 

  getRandomBreedsB = () => { 
    const newDogs = [this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]]
    this.setState({ breedsBanswers: this.state.breedsBanswers.concat(newDogs)})
    const newDogImg1 = request(`https://dog.ceo/api/breed/${encodeURIComponent(newDogs[0])}/images/random`)
    const newDogImg2 = request(`https://dog.ceo/api/breed/${encodeURIComponent(newDogs[1])}/images/random`)
    const newDogImg3 = request(`https://dog.ceo/api/breed/${encodeURIComponent(newDogs[2])}/images/random`)
    const images = [newDogImg1, newDogImg2, newDogImg3]
    Promise.all(images)
      .then(responses => responses.map(response => {
        return this.setState({ breedsB: this.state.breedsB.concat(response.body.message)})
      }))
  }

  getAnswersA = () => {
    
    const rightDog = this.state.breedsA[Math.floor(this.state.question % this.state.breedsA.length)]
    const rıghtImage = request(`https://dog.ceo/api/breed/${encodeURIComponent(rightDog)}/images/random`)
      
    const wrongImage1 = request(`https://dog.ceo/api/breeds/image/random`)
      
    const wrongImage2 = request(`https://dog.ceo/api/breeds/image/random`)
    const images = [rıghtImage, wrongImage1, wrongImage2]
    Promise.all(images)
      .then(responses => responses.map(response => {
        return this.setState({ rightArrayA: this.state.rightArrayA.concat(response.body.message) }) 
      })) 
      .then(response => {
          const shuffleArray = this.state.rightArrayA.map(url => url)
         this.setState({ shuffleArrayA: shuffle(shuffleArray)})
      })
  }

  getAnswersB = () => {
    const rightDog = this.state.breedsBanswers[Math.floor(this.state.question % this.state.breedsA.length)]
    const wrongDog1 = this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]
    const wrongDog2 = this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]
    const temporaryRightArray = [rightDog, wrongDog1, wrongDog2]
    const a = this.state.rightArrayB.concat(temporaryRightArray)
    this.setState({ rightArrayB: a})
    const b = a.map(dog => dog)
    this.setState({ shuffleArrayB: shuffle(b)}) 
  }

  checkAnswerA = (event) => {
    if(event.target.id === this.state.rightArrayA[0] && this.state.streak === 4) {
      this.setState({ 
        GameTypeA: !this.state.GameTypeA,
        question: this.state.question + 1, 
        streak: 0,
        streakCounter: this.state.streakCounter + 1, 
        points: this.state.points + 1, 
        rightArrayA: [], 
        shuffleArrayA: [] })
      this.getRandomBreedsA()
      this.props.addPoints(1)
      this.props.addStreak(1)
    } else if (event.target.id === this.state.rightArrayA[0]) {
      this.setState({ 
        GameTypeA: !this.state.GameTypeA,
        question: this.state.question + 1, 
        streak: this.state.streak + 1, 
        points: this.state.points + 1, 
        rightArrayA: [], 
        shuffleArrayA: [] })
      this.props.addPoints(1)
    } else {
      this.setState({
        GameTypeA: !this.state.GameTypeA,
        question: this.state.question + 1, 
        streak: 0,
        rightArrayA: [], 
        shuffleArrayA: [] })
    }
    
  }

  checkAnswerB = (event) => {
    if(event.target.id === this.state.rightArrayB[0] && this.state.streak === 4) {
      this.setState({ 
        GameTypeA: !this.state.GameTypeA,
        question: this.state.question + 1, 
        streak: 0,
        streakCounter: this.state.streakCounter + 1, 
        points: this.state.points + 1, 
        rightArrayB: [], 
        shuffleArrayB: [] })
      this.getRandomBreedsB()
      this.props.addPoints(1)
      this.props.addStreak(1)
    } else if (event.target.id === this.state.rightArrayB[0]) {
      this.setState({ 
        GameTypeA: !this.state.GameTypeA,
        question: this.state.question + 1, 
        streak: this.state.streak + 1, 
        points: this.state.points + 1, 
        rightArrayB: [], 
        shuffleArrayB: [] })
      this.props.addPoints(1)
    } else {
      this.setState({
        GameTypeA: !this.state.GameTypeA,
        question: this.state.question + 1, 
        streak: 0,
        rightArrayB: [], 
        shuffleArrayB: [] })
    }
    
  }

  componentDidMount() {
    
  }

  
  render() {
    
    return (
      <div>
        {this.state.question > 15 ? <GameOver /> : 
        <div> 
          <div>
            <h2>points: {this.state.points}/15 streak: {this.state.streak} streakCounter: {this.state.streakCounter} </h2> 
            {this.state.question === 0 ? <button onClick={this.firstQuestion} > 
            <KeyboardEventHandler handleKeys={['Enter']} onKeyEvent={(key) => 
            this.firstQuestion({target: {className: "buttonQuestion"}}) }/>
                        Click for the first question </button> :
          <h1>question: {this.state.question}</h1> }
          </div>
          {this.state.GameTypeA ? <div>
            <GameThreeA state={this.state} 
            getAnswers={this.getAnswersA}
            checkAnswer={this.checkAnswerA} /> 
          </div> : <GameThreeB state={this.state} 
            getAnswers={this.getAnswersB}
            checkAnswer={this.checkAnswerB}/>}
        </div> }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
    name: state.login
  }
}

const mapDispatchToProps = {
  addPoints,
  addStreak
}

export default connect(mapStateToProps, mapDispatchToProps)(GameThreeContainer)
