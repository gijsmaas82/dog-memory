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
        <h1>Hello!!</h1>
      </div>
    )
  }
}

const mapDispatchToProps = {
  
    getDogs, setDogs
  
}


export default connect(null, mapDispatchToProps)(LogInForm)