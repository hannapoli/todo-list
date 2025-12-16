import { useEffect, useReducer, useState } from "react"
import { useValidate } from "./useValidate";
import { todoReducer } from "../reducers/todoReducer";

const init = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return [];
    return tasks;
}

//el hook para gestionar el useTodoReducer
export const useTodoList = () => {
    const [tasks, dispatch] = useReducer(todoReducer, [], init);
    const { validateTask, validateDescription, errorTask, errorDescription } = useValidate();
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const taskValidated = validateTask(task);
        const descriptionValidated = validateDescription(description);

        if (!taskValidated || !descriptionValidated) {
            return;
        }

        const newTodo = {
            id: Date.now(),
            todo: taskValidated,
            description: descriptionValidated,
            done: false,
            date: new Date()
        }

        handleNewTask(newTodo);

        setTask('');
        setDescription('');
    }

    const handleNewTask = (newTodo) => {
        const action = {
            type: '[TODO] add task',
            payload: newTodo
        }

        dispatch(action);
    }
    const handleDeleteTask = (id) => {
        const action = {
            type: '[TODO] delete task',
            payload: id
        }

        dispatch(action);
    }
    const handleToggleTask = (id) => {
        const action = {
            type: '[TODO] toggle task',
            payload: id
        }
        dispatch(action);
    }

    return {
        tasks,
        handleSubmit,
        handleDeleteTask,
        handleNewTask,
        handleToggleTask,
        errorTask,
        errorDescription,
        task,
        setTask,
        description,
        setDescription
    }
}
