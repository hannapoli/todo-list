import { useEffect, useReducer, useState } from "react"
import { useTodoReducer } from "./useTodoReducer"
import { useValidate } from "./useValidate";

const init = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return [];
    return tasks;
}

//el hook para gestionar el useTodoReducer
export const useTodoList = () => {
    const [tasks, dispatch] = useReducer(useTodoReducer, [], init);
    const { validateTask, validateDescription, errorTask, errorDescription } = useValidate();

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.tarea.value;
        const description = e.target.description.value;
        // console.log(task)
        const taskValidated = validateTask(task);
        // console.log(taskValidated)
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

        e.target.tarea.value = '';
        e.target.description.value = '';
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
        errorDescription
    }
}
