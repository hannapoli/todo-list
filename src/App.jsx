import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

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
