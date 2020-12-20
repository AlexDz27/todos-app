import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props: any) {
    super(props);

    this.testFetch();
  }

  testFetch() {
    fetch('http://todos-app.local/api')
      .then(response => response.json())
      .then(data => console.log(data))
    ;
  }

  render() {
    return (
      <div className="app">
        Hello from React!
      </div>
    );
  }
}

export default App;