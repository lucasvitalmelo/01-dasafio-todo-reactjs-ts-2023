import styles from './Tasks.module.scss'

import { Check, Trash } from 'phosphor-react'

interface NewTaskProps {
  label: string
  isCompleted: boolean
  onDeleteTask: (task: string) => void
  onChangeCompletedTask: (task: string) => void
}

export function Task({ label, isCompleted, onDeleteTask, onChangeCompletedTask }: NewTaskProps) {

  function handleChangeCompletedTask(){
    onChangeCompletedTask(label)
  }

  function handleDeletedTask() {
    onDeleteTask(label)
  }

  return (
    <div className={styles.container}>

      <div className={styles.task}>
        <div>
          <button
            className={isCompleted ? styles.buttonCheck : styles.buttonNoCheck}
            onClick={handleChangeCompletedTask}
          >
            {isCompleted && <Check weight='bold' />}
          </button>
          <p className={isCompleted ? styles.taskCompleted : ""}>{label}</p>
        </div>
        <button
          className={styles.buttonTrash}
          onClick={handleDeletedTask}
        >
          <Trash size={20} />
        </button>
      </div>
    </div>
  )
}