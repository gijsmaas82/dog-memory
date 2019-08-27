import React, { Component } from 'react'
import { getDogs, setDogs } from '../actions/getDogs'
import { connect } from 'react-redux';

class LogInForm extends Component {
  componentDidMount() {
    this.props.getDogs()
  }
  
  render() {
    return (
      <div>
        <h1>hello</h1>
        <img src="https://images.dog.ceo/breeds/hound-basset/n02088238_10113.jpg" alt="cute dog" />
      </div>
    )
  }
}

const mapDispatchToProps = {
  
    getDogs, setDogs
  
}


export default connect(null, mapDispatchToProps)(LogInForm)