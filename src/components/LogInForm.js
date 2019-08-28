import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addName } from '../actions/addName'

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
    this.props.history.push("/overview")
  }

  render() {
    return (
      <div className="form-content">
        <h1>USERNAME</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.value} />
          <button >Submit</button> 
        </form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     name: state.login
//   }
// }

const mapDispatchToProps = {
  addName
}

export default connect(null, mapDispatchToProps)(LogInForm)
