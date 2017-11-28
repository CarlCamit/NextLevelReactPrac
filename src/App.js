import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/Todoitem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoItem description="First" completed/>
        <ToDoItem description="Second" />
        <ToDoItem description="Third" />
      </div>
    );
  }
}

export default App;
