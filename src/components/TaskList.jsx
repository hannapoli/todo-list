import './TaskList.css'
import { Task } from "./Task"

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
