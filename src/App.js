import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LogInForm from './components/logInForm';
import PracticeContainer from './components/PracticeContainer'
import { getDogs, setDogs } from './actions/getDogs'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getDogs()
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LogInForm} />
        <Route path="/practice/" component={PracticeContainer} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  
  getDogs, setDogs

}


export default connect(null, mapDispatchToProps)(App)

