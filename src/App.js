import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  changeColor(e) {
    window.chrome.tabs.executeScript(null, { code: "document.body.style.backgroundColor='" + e.target.value + "'" });
  }

  render() {
    return (
      <div className="App" style={{ minWidth: '400px' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Chrome Extension</h1>
        </header>
        <div className="App-intro">
          <input type="text" id="colour" name="colour" onChange={this.changeColor.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
