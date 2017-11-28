import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/Todoitem'

  // UI
class App extends Component {

  // App now owns data therefore it is able to manipulate it
  state = {
    items: [
      { description: "First", completed: false },
      { description: "Second", completed: true },
      { description: "Third", completed: false },
      { description: "Third", completed: true }
    ]
  }

  render() {
    const items = this.state.items

    return (
      <div className="App">
        {
          items.map((item, index) => (
            <ToDoItem key={ index } description={ item.description } completed={ item.completed } />
          ))
        }
      </div>
    );
  }
}

export default App;
