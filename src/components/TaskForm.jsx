import { Error } from './Error';
import './TaskForm.css'

export const TaskForm = ({ handleSubmit, errorTask, errorDescription }) => {

  return (
    <>
      <h2>Añadir tarea</h2>
      <form onSubmit={handleSubmit} className="flexContainer flexColumn">
        <input type="text" name="tarea" id="tarea" placeholder="Tarea" className={`inputForm ${errorTask ? 'inputError' : ''}`} noValidate />
        {errorTask && <Error error={errorTask} />}
        <textarea name="description" id="description" placeholder="Descripción" className={`textareaForm ${errorDescription ? 'inputError' : ''}`} noValidate></textarea>
        {errorDescription && <Error error={errorDescription} />}
        <input type="submit" className="submitBtn" value="Añadir tarea" />
      </form>
    </>
  )
}
