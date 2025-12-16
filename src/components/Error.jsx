import "./Error.css";

/**
 * Muestra un mensaje de error en la interfaz de usuario.
 * @param {Object} props - props del componente.
 * @param {string} props.error - mensaje de error.
 * @returns {JSX.Element} componente de mensaje de error.
 */
export const Error = ({ error }) => {
  return (
    <p className="errorDom">{error}</p>
  )
}