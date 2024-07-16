import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
    return (
        <ul className='list'>
            {todos.map((todo, todoindex) => (
                <TodoCard
                    key={todoindex}
                    item={todo}
                    index={todoindex}
                    handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
                />
            ))}
        </ul>
    )
}
