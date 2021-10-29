import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  render(){
    const style1 = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return(
      <div style={style1}>
        hi there
     </div>
    )
  }
}

/**
 class App extends Component {
   render(){
     return(
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
     )
   }
 }
 */

export default App;
