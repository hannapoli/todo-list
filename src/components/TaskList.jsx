import './TaskList.css'
import { Task } from "./Task"

/**
 * Componente que renderiza la lista completa de tareas.
 * Itera sobre el array de tareas y renderiza un componente Task por cada una.
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.tasks - Array de objetos de tareas a mostrar.
 * @param {Function} props.handleDeleteTask - Función para eliminar una tarea.
 * @param {Function} props.handleToggleTask - Función para cambiar el estado de una tarea.
 * @returns {JSX.Element} Lista de todas las tareas.
 */
export const TaskList = ({ tasks, handleDeleteTask, handleToggleTask }) => {

  return (
    <>
      <h2 className={tasks.length ? 'visibleH2' : 'ocultoH2'}>Tareas</h2>
      <div>
        {tasks.map((task) => (
          <article key={task.id} className='flexContainer taskCard'>
            <Task task={task} handleDeleteTask={handleDeleteTask} handleToggleTask={handleToggleTask} />
          </article>
        ))}
      </div>
    </>
  )
}
