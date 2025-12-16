import './Task.css'

/**
 * Componente que muestra una tarea individual con sus acciones.
 * Permite marcar como completada/pendiente y eliminar la tarea.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.task - Objeto de la tarea a mostrar.
 * @param {number} props.task.id - ID único de la tarea.
 * @param {string} props.task.todo - Título de la tarea.
 * @param {string} props.task.description - Descripción de la tarea.
 * @param {boolean} props.task.done - Estado de completado de la tarea.
 * @param {Function} props.handleDeleteTask - Función para eliminar la tarea.
 * @param {Function} props.handleToggleTask - Función para cambiar el estado de la tarea.
 * @returns {JSX.Element} Tarjeta de tarea individual.
 */
export const Task = ({ task, handleDeleteTask, handleToggleTask }) => {
  return (
    <>
      <p className={`taskName ${task.done ? 'completed' : ''}`}>{task.todo}</p>
      <p className={`taskDescription ${task.done ? 'completed' : ''}`}>{task.description}</p>

      <div className='taskBtns flexContainer'>
        <button onClick={() => handleToggleTask(task.id)} className={`btnTarea ${task.done ? "finalizada" : "pendiente"}`}>{task.done ? "Finalizada" : "Pendiente"}</button>
        <button onClick={() => handleDeleteTask(task.id)} className='btnTarea eliminar'>Eliminar</button>
      </div>
    </>
  )
}
