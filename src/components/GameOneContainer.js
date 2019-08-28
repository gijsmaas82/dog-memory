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
console.log(arr)


class GameOneContainer extends Component {
  state = {
    question: 0,
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
  }

  getAnswers = () => {
    
    const rightDog = this.state.breeds[Math.floor(Math.random()* (this.state.question % this.state.breeds.length))]
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


  componentDidMount() {
    
  }

  
  render() {
    
    return (
      <div>
        
        {this.state.question === 0 && <button onClick={this.firstQuestion} > Click for the first question </button>}
        {this.state.question !== 0 && 
        <div>
          <h1>question: {this.state.question}</h1>
          <h2> Click on the right picture of the {this.state.breeds[Math.floor(Math.random()* (this.state.question % this.state.breeds.length))]}</h2>
        </div>}
        <div>
          
          {this.state.rightArray.length === 0 && this.state.question !== 0 ? 
          <button onClick={this.getAnswers}>click for answers</button> : ''}
          {this.state.rightArray.length !== 0 && <div>
            <img src={this.state.shuffleArray[0]} alt="doggie" />
            <img src={this.state.shuffleArray[1]} alt="doggie" />
            <img src={this.state.shuffleArray[2]} alt="doggie" />
          </div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps)(GameOneContainer)
