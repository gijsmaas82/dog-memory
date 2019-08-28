import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import OverView from './components/OverView'
import LogInForm from './components/LogInForm';
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
        <Route  path="/practice/" component={PracticeContainer} />
        <Route path="/overview/" component={OverView} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  
  getDogs, setDogs

}


export default connect(null, mapDispatchToProps)(App)

