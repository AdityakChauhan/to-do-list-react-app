import React from 'react'

export default function TodoCard({ item, handleDeleteTodo, index, handleEditTodo }) {
    return (
        <li className='todoItem'>
            <p>{item}</p>
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodo(index)}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button onClick={() => handleDeleteTodo(index)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}
