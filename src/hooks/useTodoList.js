import { useEffect, useReducer, useState } from "react"
import { useValidate } from "./useValidate";
import { todoReducer } from "../reducers/todoReducer";

/**
 * Función de inicialización que recupera las tareas guardadas en localStorage.
 * @returns {Array} Array de tareas guardadas o array vacío si no hay tareas.
 */
const init = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return [];
    return tasks;
}

/**
 * Hook personalizado para gestionar la lista de tareas.
 * Proporciona funcionalidades para agregar, eliminar, alternar estado de tareas
 * y gestionar el formulario con validación.
 * @returns {Object} Objeto con el estado y funciones para gestionar las tareas.
 * @returns {Array} tasks - Array de todas las tareas.
 * @returns {Function} handleSubmit - Función para manejar el envío del formulario.
 * @returns {Function} handleDeleteTask - Función para eliminar una tarea por ID.
 * @returns {Function} handleNewTask - Función para agregar una nueva tarea.
 * @returns {Function} handleToggleTask - Función para cambiar el estado de completado de una tarea.
 * @returns {string|null} errorTask - Mensaje de error de validación del título.
 * @returns {string|null} errorDescription - Mensaje de error de validación de la descripción.
 * @returns {string} task - Valor actual del campo de título.
 * @returns {Function} setTask - Función para actualizar el título.
 * @returns {string} description - Valor actual del campo de descripción.
 * @returns {Function} setDescription - Función para actualizar la descripción.
 */
export const useTodoList = () => {
    const [tasks, dispatch] = useReducer(todoReducer, [], init);
    const { validateTask, validateDescription, errorTask, errorDescription } = useValidate();
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    /**
     * Maneja el envío del formulario de nueva tarea.
     * Valida los campos y crea una nueva tarea si la validación es exitosa.
     * @param {Event} e - Evento del formulario.
     */
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

    /**
     * Agrega una nueva tarea al estado mediante el dispatch del reducer.
     * @param {Object} newTodo - Objeto de la nueva tarea a agregar.
     * @param {number} newTodo.id - ID único de la tarea.
     * @param {string} newTodo.todo - Título de la tarea.
     * @param {string} newTodo.description - Descripción de la tarea.
     * @param {boolean} newTodo.done - Estado de completado de la tarea.
     * @param {Date} newTodo.date - Fecha de creación de la tarea.
     */
    const handleNewTask = (newTodo) => {
        const action = {
            type: '[TODO] add task',
            payload: newTodo
        }

        dispatch(action);
    }
    
    /**
     * Elimina una tarea del estado mediante su ID.
     * @param {number} id - ID de la tarea a eliminar.
     */
    const handleDeleteTask = (id) => {
        const action = {
            type: '[TODO] delete task',
            payload: id
        }

        dispatch(action);
    }
    
    /**
     * Alterna el estado de completado de una tarea (pendiente/finalizada).
     * @param {number} id - ID de la tarea cuyo estado se va a alternar.
     */
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
