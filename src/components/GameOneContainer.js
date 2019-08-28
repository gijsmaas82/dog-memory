import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'

class GameOneContainer extends Component {
  state = {
    question: 0,
    points: 0,
    breeds: [],
    rightImage: null,
    wrongImage1: null,
    wrongImage2: null
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
    const rightDog = this.state.breeds[Math.floor(this.state.question % this.state.breeds.length)]
    request(`https://dog.ceo/api/breed/${encodeURIComponent(rightDog)}/images/random`)
      .then(response => {
        this.setState({ rightImage: response.body.message })
      })
    request(`https://dog.ceo/api/breeds/image/random`)
      .then(response => {
        this.setState({ wrongImage1: response.body.message })
      })
    request(`https://dog.ceo/api/breeds/image/random`)
      .then(response => {
        this.setState({ wrongImage2: response.body.message })
      })
    
  }

  componentDidMount() {
    
  }

  
  render() {
    console.log(this.state)
    return (
      <div>
        
        {this.state.question === 0 && <button onClick={this.firstQuestion} > Click for the first question </button>}
        {this.state.question !== 0 && 
        <div>
          <h1>question: {this.state.question}</h1>
          <h2> Click on the right picture of the {this.state.breeds[Math.floor(this.state.question % this.state.breeds.length)]}</h2>
        </div>}
        <div>
          
          {this.state.rightImage === null && this.state.question !== 0 ? 
          <button onClick={this.getAnswers}>click for answers</button> : ''}
          {this.state.rightImage !== null && <div>
            <img src={this.state.rightImage} alt="doggie" />
            <img src={this.state.wrongImage1} alt="doggie" />
            <img src={this.state.wrongImage2} alt="doggie" />
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
