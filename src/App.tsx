import { useState } from 'react'

import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Task } from './components/Tasks/Task'

import clipboard from './assets/clipboard.svg'

import styles from './App.module.scss'

import './global.css'

interface TaskProps {
  completed: boolean,
  label: string,
}

export function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([])

  const totalTasks = tasks.length

  const totalTasksCompleted = tasks.filter(task => task.completed == true)

  function handleNewTask(task: string) {
    if (task.trim().length > 0) {
      setTasks(
        [...tasks, {
          completed: false,
          label: task,
        }]
      )
    }
  }

  function handleDeleteTask(deleteTask: string) {
    const deletedOneTask = tasks.filter(task => task.label !== deleteTask)
    setTasks(deletedOneTask)
  }

  function handleCompletedTask(currentTask: string) {
    const changedTheStateOfATask = tasks.map(task => {
      if (task.label === currentTask) {
        return { label: task.label, completed: !task.completed }
      } else {
        return task
      }
    })
    setTasks(changedTheStateOfATask)
  }


  return (
    <main className={styles.container}>
      <Header />
      <section >
        <NewTask handleCreateNewTask={handleNewTask} />
        <div className={styles.titleToStates}>
          <div>
            <strong>Tarefas criadas</strong>
            <p>{totalTasks}</p>
          </div>
          <div>
            <strong >Concluídas</strong>
            <p>{totalTasks > 0 ? `${totalTasksCompleted.length} de ${totalTasks}` : 0}</p>
          </div>
        </div>
        {
          tasks.length === 0 ?
            (
              <div className={styles.emptyTasks}>
                <img src={clipboard} alt="clipboard" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )
            :
            (

              <div className={styles.tasksContainer}>
                {tasks.map((task) => {
                  return (
                    <Task key={task.label} label={task.label} isCompleted={task.completed} onDeleteTask={handleDeleteTask} onChangeCompletedTask={handleCompletedTask} />
                  )
                })
                }
              </div>
            )
        }
      </section>
    </main>
  )
}
