import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addName } from '../actions/addName'
import './LogInForm.css'

class LogInForm extends Component {
  state = {
    value: '',
    picture: ['https://images.dog.ceo/breeds/weimaraner/n02092339_7500.jpg']
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
        <div className="gameTitle"><h1>Dog-Memory-Game<b></b></h1></div>
        <div className="username" >
          <p>This game is all about learning different dogbreeds. Please enter a name and click on submit or press enter to start learning the dogbreeds. Have Fun!!</p>
          <div className="userSubmit"><h1>User</h1>
          <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.value} />
          <button >Submit</button> 
          </form>
          </div>
          <div><img className="startImage" src={this.state.picture[0]} /></div>
        </div>
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
