import React from 'react';
import './App.css';
import OverView from './components/overView'
import LogInForm from './components/LogInForm';


function App() {
  return (
    <div className="App">
      <LogInForm /> 
      <OverView />
    
    </div>
  );
}

export default App;
