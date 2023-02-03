import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Tasks } from './components/Tasks/Tasks'

import './global.css'

export function App() {

  return (
    <main>
      <Header/>
      <NewTask/>
      <Tasks/>
    </main>
  )
}


