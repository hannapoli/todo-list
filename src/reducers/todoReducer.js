/**
 * Reducer para gestionar el estado de las tareas.
 * Maneja las acciones de agregar, eliminar y cambiar el estado de completado de tareas.
 * @param {Array} state - Estado actual del array de tareas.
 * @param {Object} action - Objeto de acción con tipo y payload.
 * @param {string} action.type - Tipo de acción a ejecutar: '[TODO] add task', '[TODO] delete task', '[TODO] toggle task'.
 * @param {Object|number} action.payload - Datos de la acción (objeto de tarea para agregar, ID para eliminar/alternar).
 * @returns {Array} Nuevo estado del array de tareas.
 */
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case '[TODO] add task':
            return [...state, action.payload];

        case '[TODO] delete task':
            const newState = state.filter(task => task.id !== action.payload)
            return newState;

        case '[TODO] toggle task':
            //cambiará la propiedad done de true a false o de false a true
            const newStatus = state.map(task => {
                if (task.id === action.payload)
                    return { ...task, done: !task.done };
                else return task;
            })
            return newStatus;
        default:
            return state;
    }
}
