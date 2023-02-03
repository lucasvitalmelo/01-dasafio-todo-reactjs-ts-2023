import styles from './Header.module.scss'

import logoTodo from '../../assets/logo.svg'
import '../../global.css'


export function Header() {
  return (
      <header className={styles.header}>
        <img src={logoTodo} />
      </header>
  )
}