import React, { Component } from 'react'
import { connect } from 'react-redux'
import Practice from './Practice'


class PracticeContainer extends Component {
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div>
        <Practice dogs={this.props.dogs}/>
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