import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import GameTwo from './GameTwo'
import GameOver from './GameOver'
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

class GameTwoContainer extends Component {
  state = {
    question: 0,
    streak: 0,
    streakCounter: 0,
    points: 0,
    breeds: [],
    breedsAnswers: [],
    rightArray: [],
    shuffleArray: [],
    showHintButton: true
  }

  firstQuestion = () => {
    this.setState({ question: this.state.question + 1 })
    this.getRandomBreeds()
  }

  getRandomBreeds = () => {

    const newDogs = [
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)],
      this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]
    ]
    this.setState({ breedsAnswers: this.state.breedsAnswers.concat(newDogs) })

    const newDogImg1 = request(`https://dog.ceo/api/breed/${encodeURIComponent(newDogs[0])}/images/random`)
    const newDogImg2 = request(`https://dog.ceo/api/breed/${encodeURIComponent(newDogs[1])}/images/random`)
    const newDogImg3 = request(`https://dog.ceo/api/breed/${encodeURIComponent(newDogs[2])}/images/random`)

    const images = [newDogImg1, newDogImg2, newDogImg3]
    Promise.all(images)
      .then(responses => responses.map(response => {
        return this.setState({ breeds: this.state.breeds.concat(response.body.message) })
      }))
  }


  getAnswers = () => {
    const rightDog = this.state.breedsAnswers[Math.floor(this.state.question % this.state.breeds.length)]
    const wrongDog1 = this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]
    const wrongDog2 = this.props.dogs[Math.floor(Math.random() * this.props.dogs.length)]

    const dogsArray = this.state.rightArray.concat([rightDog, wrongDog1, wrongDog2])
    this.setState({ rightArray: dogsArray })
    const b = dogsArray.map(dog => dog)
    this.setState({ shuffleArray: shuffle(b) })
  }

  checkAnswer = (event) => {
    if (event.target.id === this.state.rightArray[0] && this.state.streak === 4) {
      this.setState({
        question: this.state.question + 1,
        streak: 0,
        streakCounter: this.state.streakCounter + 1,
        points: this.state.points + 1,
        rightArray: [],
        shuffleArray: [],
        showHintButton: false
      })
      this.getRandomBreeds()
      this.props.addPoints(1)
      this.props.addStreak(1)

    } else if (event.target.id === this.state.rightArray[0]) {
      this.setState({
        question: this.state.question + 1,
        streak: this.state.streak + 1,
        points: this.state.points + 1,
        rightArray: [],
        shuffleArray: [],
        showHintButton: false
      })
      this.props.addPoints(1)

    } else {
      setTimeout(this.wrongAnswer, 2000)
      this.setState({ shuffleArray: this.state.shuffleArray.reduce((acc, cur) => {
        if (cur === this.state.rightArray[0]) {
          acc.push(cur)
        }
        return acc
      }, [] )})
    } 
  }

  wrongAnswer = () => {
    this.setState({question: this.state.question + 1, 
      streak: 0,
      rightArray: [], 
      shuffleArray: [],
      showHintButton: true            
      }) 

  }

  getHint = () => {
    //alert('Hint: This is not the ' + this.state.rightArray[2] + '. Choose one of the two other answers!')
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
          {
            this.state.question > 15 ? <GameOver /> :
              <GameTwo props={this.props} state={this.state}
                firstQuestion={this.firstQuestion}
                getAnswers={this.getAnswers}
                checkAnswer={this.checkAnswer}
                getHint={this.getHint} />
          }

        </div >
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

  export default connect(mapStateToProps, mapDispatchToProps)(GameTwoContainer)

