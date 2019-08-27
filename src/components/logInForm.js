import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addName } from '../actions/addName'
import { Link } from 'react-router-dom'

class LogInForm extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addName(this.state.value)

  }

  render() {
    return (
      <div className="form-content">
        <h1>USERNAME</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <Link to="/overview" ><button >Submit</button> </Link>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.login
  }
}

const mapDispatchToProps = {
  addName
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)
