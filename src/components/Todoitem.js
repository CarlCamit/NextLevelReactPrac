import React from 'react'

function ToDoItem ({ completed = false, description }) {
    return (
        <label>
            <input type="checkbox" checked={ completed }/>
            { description }
        </label>
    )
}

export default ToDoItem