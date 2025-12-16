import './TodoList.css'
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { useTodoList } from '../hooks/useTodoList';

/**
 * Componente principal que gestiona y muestra la lista de tareas.
 * Integra el formulario para agregar tareas y la lista de tareas existentes.
 * @returns {JSX.Element} Componente TodoList con formulario y lista de tareas.
 */
export const TodoList = () => {

    const { tasks, handleSubmit, handleDeleteTask, handleToggleTask, errorTask, errorDescription, task, setTask, description, setDescription } = useTodoList();
    return (
        <>
            <section>
                <TaskForm 
                    handleSubmit={handleSubmit} 
                    errorTask={errorTask} 
                    errorDescription={errorDescription}
                    task={task}
                    setTask={setTask}
                    description={description}
                    setDescription={setDescription}
                />
            </section>
            <section className='taskList flexContainer flexColumn'>
                <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleToggleTask={handleToggleTask} />
            </section>
        </>
    )
}
