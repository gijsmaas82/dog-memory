import React, { Component } from 'react'
import UserName from './UserName';
import { connect } from 'react-redux'
//import * as request from 'superagent'

class SecondGame extends Component {
  state = {
    images: []
  }

  getThreeDogImages = () => {
    // const img1 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
    // const img2 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
    // const img3 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
  }

  render() {
    (console.log(this.props.dogs))
    return (
      <div>
        <h1> Ready? <UserName /> </h1>
        <div> Question</div>
        <div> 3 random dogbreed pictures 
 
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
export default connect(mapStateToProps)(SecondGame)


// In this game you'll get 15 questions. 
// You get a name of a dog breed and you have to choose the right picture.
// You start with 3 breeds and 3 possible pictures. 
// After 5 correct answers the game gets more difficult.