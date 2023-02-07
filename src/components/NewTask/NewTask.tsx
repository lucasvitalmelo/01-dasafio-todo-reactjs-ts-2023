import { useState } from 'react'

import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.scss'

interface NewTaskProps {
  handleCreateNewTask: (task: string) => void
}

export function NewTask({ handleCreateNewTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState('')

  function handleNewTask() {
    handleCreateNewTask(newTask)
    setNewTask('')
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.inputText}
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={event => setNewTask(event.target.value)}
      />
      <button
        onClick={handleNewTask}
      >
        Criar
        <PlusCircle size={20} weight="bold" />
      </button>
    </div>
  )
}