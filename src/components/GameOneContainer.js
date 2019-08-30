import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import GameOne from './GameOne'
import GameOver from './GameOver'
import UserStatsContainer from './UserStatsContainer'
import { addPoints } from '../actions/addPoints'
import { addStreak } from '../actions/addStreak'

 
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

class GameOneContainer extends Component {
  state = {
    question: 0,
    streak: 0,
    streakCounter: 0,
    points: 0,
    breeds: [],
    rightArray: [],
    shuffleArray: [],
    showHintButton: true,
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

  checkAnswer = (event) => {
    if(event.target.id === this.state.rightArray[0] && this.state.streak === 4) {
      this.setState({ question: this.state.question + 1, 
        streak: 0,
        streakCounter: this.state.streakCounter + 1, 
        points: this.state.points + 1, 
        rightArray: [], 
        shuffleArray: [],
        showHintButton: false,
       })
        
      this.getRandomBreeds()
      this.props.addPoints(1)
      this.props.addStreak(1)
    } else if (event.target.id === this.state.rightArray[0]) {
      this.setState({ question: this.state.question + 1, 
        streak: this.state.streak + 1, 
        points: this.state.points + 1, 
        rightArray: [], 
        shuffleArray: [],
        showHintButton: false,
       })
      this.props.addPoints(1)
    } else {
      setTimeout(this.wrongAnswer, 2000)
      this.setState({ shuffleArray: this.state.shuffleArray.reduce((acc, url) => {
        if (url === this.state.rightArray[0]) {
          acc.push(url)
        }
        return acc
      }, [])})
    } 
  }

  wrongAnswer = () => {
    this.setState({question: this.state.question + 1, 
      streak: 0,
      rightArray: [], 
      shuffleArray: [],
      showHintButton: true,
     }) 
  }

  getHint = () => {
    if (this.state.shuffleArray[0] === this.state.rightArray[0]) {
    this.setState({
    shuffleArray: [this.state.shuffleArray[0], this.state.shuffleArray[1]]
    })
    }
    else if (this.state.shuffleArray[1] === this.state.rightArray[0]) {
    this.setState({
    shuffleArray: [this.state.shuffleArray[1], this.state.shuffleArray[0]]
    })
    }
    else {
    this.setState({
    shuffleArray: [this.state.shuffleArray[2], this.state.shuffleArray[0]]
    })
    }
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
        checkAnswer={this.checkAnswer}
        getHint={this.getHint} /> }
        
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
