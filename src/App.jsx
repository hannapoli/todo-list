import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

/**
 * Componente raíz de la aplicación.
 * Estructura la aplicación con encabezado, contenido principal y pie de página.
 * @returns {JSX.Element} Componente principal de la aplicación.
 */
function App() {

  return (
    <>
      <Header />
      <main className='mainContainer flexContainer'>
        <h1>Mis tareas</h1>
        <TodoList />
      </main>
      <Footer />
    </>
  )
}

export default App
