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

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // Get current items
      const items = prevState.items
      // Find specfic item using index
      const item = items[index]
      // True = False / False = True
      item.completed = !item.completed
      // Return the changes made
      return {
        items: items
      }
    })
  }

  render() {
    const items = this.state.items

    return (
      <div className="App">
        {
          items.map((item, index) => (
            <ToDoItem 
              key={ index } 
              description={ item.description } 
              completed={ item.completed }
              onToggleCompleted={
                () => {
                  console.log('ToDoItem onToggleCompleted recieved', index)
                  this.onToggleItemAtIndex(index)
                }
              } />
          ))
        }
      </div>
    );
  }
}

export default App;
