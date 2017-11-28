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
      { description: "Fourth", completed: true }
    ]
  }

  // onToggleItemAtIndex = (index) => {
  //   this.setState((prevState) => {
  //     // Get current items
  //     const items = prevState.items
  //     // Find specfic item using index
  //     const item = items[index]
  //     // True = False / False = True
  //     item.completed = !item.completed
  //     // Return the changes made
  //     return {
  //       items: items
  //     }
  //   })
  // }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // Get current items
      const beforeItems = prevState.items
      // Find specfic item using index
      const afterItems = beforeItems.map((item, currentIndex) => {
        // If the item in the array has the index that we want to change
        if (currentIndex === index) {
          // Make a copy of the object by assigning contents of item to it, and set the value of completed to be the opposite
          // const copy = Object.assign({}, item, { comepleted: !item.completed })
          const copy = { ...item, completed: !item.completed }
          // Return the new copy
          return copy
        }
        // If it doesn't have the index
        else {
          // Return the original item
          return item
        }
      })
      // Return all changes to items
      return {
        items: afterItems
      }
    })
  }

  render() {
    const items = this.state.items
    const total = items.length
    let totalCompleted = 0
    let totalIncompleted = 0
    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
      else {
        totalIncompleted += 1
      }
    })

    return (
      <div className="App">
        <dl>
          <dt>Total</dt>
          <dd>{ total }</dd>
          <dt>Total Completed</dt>
          <dd>{ totalCompleted }</dd>
          <dt>Total Incompleted</dt>
          <dd>{ totalIncompleted }</dd>
        </dl>
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
            )
          )
        }
      </div>
    );
  }
}

export default App;
