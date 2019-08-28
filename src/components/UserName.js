import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserName extends Component {

  render() {
    console.log(this.props.name)
    return (
        <div>
          {this.props.name}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.login
  }
}
export default connect(mapStateToProps)(UserName)