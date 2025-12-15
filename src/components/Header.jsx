import './Header.css'
import { useState } from 'react'

/**
 * Muestra el encabezado de la aplicación con navegación.
 * @returns {JSX.Element} el componente Header.
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * Cambia el estado del menú de navegación (visible o oculto).
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fullContainer">
      <nav>
        <a href="#" className="nav-logo">Todo list</a>

        <div className="nav-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'visible' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
