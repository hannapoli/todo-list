import './Task.css'

export const Task = ({ task, handleDeleteTask, handleToggleTask }) => {
  return (
    <>
      <p className='taskName'>{task.todo}</p>
      <p>{task.description}</p>
      <div className='taskBtns flexContainer'>
        <button onClick={() => handleToggleTask(task.id)} className={`btnTarea ${task.done ? "finalizada" : "pendiente"}`}>{task.done ? "Finalizada" : "Pendiente"}</button>
        <button onClick={() => handleDeleteTask(task.id)} className='btnTarea eliminar'>Eliminar</button>
      </div>
    </>
  )
}
