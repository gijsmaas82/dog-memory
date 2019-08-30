import React, { Component } from 'react'
import { connect } from 'react-redux'
import Practice from './Practice'
import * as request from 'superagent'


class PracticeContainer extends Component {
  state = {
    images: []
  }

  getDogImages = (e) => {
    this.setState({ images: []})
    const dog = e.target.id
      const img1 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img2 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img3 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img4 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img5 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img6 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img7 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img8 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img9 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const img10 = request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images/random`)
      const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
      Promise.all(images)
        .then(responses => responses.map(response => {
           this.addImages(response.body.message)
        }))
    }

  addImages = (image) => {
    this.setState({
      images: this.state.images.concat(image)
    })
  }
  
  render() {
    return (
      <div>
        <Practice dogs={this.props.dogs} images={this.state.images} getDogImages={this.getDogImages} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps)(PracticeContainer)