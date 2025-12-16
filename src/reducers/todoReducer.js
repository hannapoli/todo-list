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
