import React from 'react'
// import InputForm from './Input'

const emojiCheck = (completed) => {
    let emoji = '✗'
    if (completed) {
        emoji = '✓'
    }
    return emoji
}

function ToDoItem ({
    completed = false,
    emoji = emojiCheck(completed),
    description,
    onToggleCompleted,
    onDescriptionUpdate
}) {
    return (
        <div>
            <button 
                type="button"
                value={ completed }
                onClick={ 
                    (event) => {
                        // Event Log
                        console.log('Clicked checkbox', description)
                        // When user clicks completed checkbox change value
                        onToggleCompleted()
                    }
                }
            >
                { emoji }
            </button>
            <input 
                type="text"
                value={ description }
                onChange={
                    (event) => {
                        description = event.target.value
                        onDescriptionUpdate(description)
                    }
                }
            />
        </div>
    )
}

// function ToDoItem ({ 
//     completed = false,
//     description,
//     onToggleCompleted
// }) {
//     return (
//         <label>
//             <input 
//                 type="checkbox"
//                 checked={ completed }
//                 onChange={ 
//                     (event) => {
//                         // Event Log
//                         console.log('Clicked checkbox', description)
//                         // When user clicks completed checkbox change value
//                         onToggleCompleted()
//                     }
//                 }
//             />
//             { description }
//         </label>
//     )
// }

export default ToDoItem