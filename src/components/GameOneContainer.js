import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'


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
    points: 0,
    breeds: [],
    rightArray: [],
    shuffleArray: [],
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
        points: this.state.points + 1, 
        rightArray: [], 
        shuffleArray: [] })
      this.getRandomBreeds()
    } else if (event.target.id === this.state.rightArray[0]) {
      this.setState({ question: this.state.question + 1, 
        streak: this.state.streak + 1, 
        points: this.state.points + 1, 
        rightArray: [], 
        shuffleArray: [] })
      
    } else {
      this.setState({question: this.state.question + 1, 
        streak: 0,
        rightArray: [], 
        shuffleArray: [] })
    }
    
  }

  componentDidMount() {
    
  }

  
  render() {
    
    return (
      <div>
        
        <h2>User: {this.props.name} points: {this.state.points}/15 streak: {this.state.streak}</h2> 
        
        {this.state.question === 0 && <button onClick={this.firstQuestion} > Click for the first question </button>}
        {this.state.question !== 0 &&  
        <div>
          <h1>question: {this.state.question}</h1>
          <h2> Click on the right picture of the {this.state.breeds[Math.floor(this.state.question % this.state.breeds.length)]}</h2>
        </div>}
        <div>
          
          {this.state.rightArray.length === 0 && this.state.question !== 0 ? 
          <button onClick={this.getAnswers}>click for answers</button> : ''}
          {this.state.rightArray.length !== 0 && <div>
            <img id={this.state.shuffleArray[0]} src={this.state.shuffleArray[0]} alt="doggie" 
            onClick={this.checkAnswer} />
            <img id={this.state.shuffleArray[1]} src={this.state.shuffleArray[1]} alt="doggie"
            onClick={this.checkAnswer} />
            <img id={this.state.shuffleArray[2]} src={this.state.shuffleArray[2]} alt="doggie" 
            onClick={this.checkAnswer} />
          </div>}
        </div>
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

export default connect(mapStateToProps)(GameOneContainer)
