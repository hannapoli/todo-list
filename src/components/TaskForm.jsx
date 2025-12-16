import { Error } from './Error';
import './TaskForm.css'

/**
 * Componente de formulario para agregar nuevas tareas.
 * Incluye campos para tarea y descripción con validación y mensajes de error.
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.handleSubmit - Función para manejar el envío del formulario.
 * @param {string|null} props.errorTask - Mensaje de error de validación de la tarea.
 * @param {string|null} props.errorDescription - Mensaje de error de validación de la descripción.
 * @param {string} props.task - Valor actual del campo de tarea.
 * @param {Function} props.setTask - Función para actualizar el valor de la tarea.
 * @param {string} props.description - Valor actual del campo de descripción.
 * @param {Function} props.setDescription - Función para actualizar el valor de la descripción.
 * @returns {JSX.Element} Formulario para crear tareas.
 */
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
