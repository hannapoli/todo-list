import { Error } from './Error';
import './TaskForm.css'

export const TaskForm = ({ handleSubmit, errorTask, errorDescription, task, setTask, description, setDescription }) => {

  return (
    <>
      <h2>Añadir tarea</h2>
      <form onSubmit={handleSubmit} className="flexContainer flexColumn">
        <input
          type="text"
          name="tarea"
          id="tarea"
          placeholder="Tarea"
          className={`inputForm ${errorTask ? 'inputError' : ''}`}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          noValidate
        />
        {errorTask && <Error error={errorTask} />}
        <textarea
          name="description"
          id="description"
          placeholder="Descripción"
          className={`textareaForm ${errorDescription ? 'inputError' : ''}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          noValidate
        ></textarea>
        {errorDescription && <Error error={errorDescription} />}
        <input type="submit" className="submitBtn" value="Añadir tarea" />
      </form>
    </>
  )
}
