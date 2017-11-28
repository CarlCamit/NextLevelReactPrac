import React from 'react'

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
    onToggleCompleted
}) {
    return (
        <label>
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
            { description }
        </label>
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