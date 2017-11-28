import React from 'react'

function ToDoItem ({ 
    completed = false,
    description,
    onToggleCompleted
}) {
    return (
        <label>
            <input 
                type="checkbox"
                checked={ completed }
                onChange={ 
                    (event) => {
                        // Event Log
                        console.log('Clicked checkbox', description)
                        // When user clicks completed checkbox change value
                        onToggleCompleted()
                    }
                }
            />
            { description }
        </label>
    )
}

export default ToDoItem