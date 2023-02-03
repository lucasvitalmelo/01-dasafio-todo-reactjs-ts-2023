import styles from './NewTask.module.scss'

export function NewTask() {
  return (
    <div className={styles.container}>
      <input className={styles.inputText} type="text" placeholder="Adicione uma nova tarefa" />
      <button>Criar</button>
    </div>
  )
}