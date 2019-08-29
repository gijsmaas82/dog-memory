import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import OverView from './components/OverView'
import LogInForm from './components/LogInForm';
import PracticeContainer from './components/PracticeContainer'
import { getDogs, setDogs } from './actions/getDogs'
import { connect } from 'react-redux';
import GameTwoContainer from './components/GameTwoContainer'
import GameOneContainer from './components/GameOneContainer'
import GameThreeContainer from './components/GameThreeContainer'
class App extends Component {
  componentDidMount() {
    this.props.getDogs()
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LogInForm} />
        <Route  path="/practice/" component={PracticeContainer} />
        <Route path="/overview/" component={OverView} />
        <Route path="/gameone/" component={GameOneContainer} />
        <Route path="/gametwo/" component={GameTwoContainer}/>
        <Route path="/gamethree/" component={GameThreeContainer} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  
  getDogs, setDogs

}


export default connect(null, mapDispatchToProps)(App)

