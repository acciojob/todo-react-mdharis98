import React, { useState } from 'react';
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [taskid, setTaskid] = useState(1);
    const handleAddTask = () => {
        if (!task.trim()) {
            alert("Enter a task");
            return;
        }
        const newTask = { task: task, id: taskid };
        setTaskid(taskid + 1);
        setTask("");
        setTodos([...todos, newTask]);
    }
    const handleDeleteTask = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    }
    return (
        <div>
            <h1>To-Do List</h1>
            <div className='todoinput'>
                <input type='text' value={task} onChange={(e) => setTask(e.target.value)}/>
                <button onClick={handleAddTask}>Add Todo</button>
            </div>
            <ul className='todolist'>
                {
                    todos.map((todo, index) => {
                        return <li key={index}><span>{todo.task}</span><button onClick={() => handleDeleteTask(todo.id)}>Delete</button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo;