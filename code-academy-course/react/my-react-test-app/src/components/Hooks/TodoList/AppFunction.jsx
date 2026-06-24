import { useState } from "react";
import NewTask from './NewTask';
import TaskList from './TaskList';

export default function TodoList() {
    const [newTask, setNewTask] = useState({});
    
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({
            ...prev,
            id: Date.now(),
            [name]: value
        }))
    };

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
    }

    const handleDelete = (taskIdRemove) => {
        setAllTasks((prev) => 
            prev.filter(task => task.id !== taskIdRemove)
        )
    }

    const divStyes = {
        margin: "40px",
        padding: "40px"
    }
    return (
        <div style={divStyes}>
            <h1>Todo List</h1>
            <NewTask 
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TaskList 
                allTasks={allTasks}
                handleDelete={handleDelete}
            />
        </div>
    )
}