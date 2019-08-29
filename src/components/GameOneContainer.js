import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import GameOne from './GameOne'
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



class GameOneContainer extends Component {
  state = {
    question: 0,
    streak: 0,
    streakCounter: 0,
    points: 0,
    breeds: [],
    rightArray: [],
    shuffleArray: [],
    answer: null
    }

  firstQuestion = () => {
    this.setState({ question: this.state.question + 1})
    this.getRandomBreeds()
  }

  getRandomBreeds = () => {
    const newDogs = [this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]]
    this.setState({ breeds: this.state.breeds.concat(newDogs)})
    console.log('hello')   
  }

  getAnswers = () => {
    
    const rightDog = this.state.breeds[Math.floor(this.state.question % this.state.breeds.length)]
    const rıghtImage = request(`https://dog.ceo/api/breed/${encodeURIComponent(rightDog)}/images/random`)
      
    const wrongImage1 = request(`https://dog.ceo/api/breeds/image/random`)
      
    const wrongImage2 = request(`https://dog.ceo/api/breeds/image/random`)
    const images = [rıghtImage, wrongImage1, wrongImage2]
    Promise.all(images)
      .then(responses => responses.map(response => {
        return this.setState({ rightArray: this.state.rightArray.concat(response.body.message) }) 
      })) 
      .then(response => {
          const shuffleArray = this.state.rightArray.map(url => url)
         this.setState({ shuffleArray: shuffle(shuffleArray)})
      })
  }
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }
  
  checkAnswer = (event) => {
    this.setState({ answer: event.target.id })
    if(event.target.id === this.state.rightArray[0] && this.state.streak === 4) {
      this.setState({ question: this.state.question + 1, 
        streak: 0,
        streakCounter: this.state.streakCounter + 1, 
        points: this.state.points + 1, 
        rightArray: [], 
        shuffleArray: [] })
      this.getRandomBreeds()
      this.props.addPoints(1)
      this.props.addStreak(1)
    } else if (event.target.id === this.state.rightArray[0]) {
      this.setState({ question: this.state.question + 1, 
        streak: this.state.streak + 1, 
        points: this.state.points + 1, 
        rightArray: [], 
        shuffleArray: [] })
      this.props.addPoints(1)
    } else {
      setTimeout(this.wrongAnswer, 2000)
      this.setState({ shuffleArray: this.state.shuffleArray.map(url => {
        return url = this.state.rightArray[0]
      })})
    } 
  }

  wrongAnswer = () => {
    this.setState({question: this.state.question + 1, 
      streak: 0,
      rightArray: [], 
      shuffleArray: [] }) 
  }

  componentDidMount() {
    
  }

  
  render() {
    
    return (
      <div>
        {this.state.question > 15 ? <GameOver /> :
        <GameOne props={this.props} state={this.state} 
        firstQuestion={this.firstQuestion}
        getAnswers={this.getAnswers}
        checkAnswer={this.checkAnswer}  />}
       
        
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

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)
