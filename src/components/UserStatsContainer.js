import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

class UserStatsContainer extends Component {
state = {
  currentLevel: 'noob',
  streakLevel: 'streakless'
}

checkLevel = () => {
  if (this.props.points >= 1 && this.props.points < 5) {
    this.setState({ currentLevel: 'beginner' })
  } else if (this.props.points >= 5 && this.props.points < 10) {
    this.setState({ currentLevel: 'medium' })
  } else if (this.props.points >= 10 && this.props.points < 20) {
    this.setState({ currentLevel: 'advanced' })
  } else if (this.props.points > 20) {
    this.setState({ currentLevel: 'master' })
  }
}

checkStreaks = () => {
  if (this.props.streaks === 1) {
    this.setState({ streakLevel: 'streaked'})
  } else if (this.props.streaks === 2) {
    this.setState({ streakLevel: 'streaker'})
  } else if (this.props.streaks === 3) {
    this.setState({ streakLevel: 'streakest'})
  } else if (this.props.streaks > 3) {
    this.setState({ streakLevel: 'streakChampion'})
  }
}

componentDidMount() {
  this.checkLevel()
  this.checkStreaks()
}
  render() {
    
    return (
      <div>
        <UserStats stats={this.props} level={this.state}  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.login,
    points: state.points,
    streaks: state.streak
  }
}
export default connect(mapStateToProps)(UserStatsContainer)
