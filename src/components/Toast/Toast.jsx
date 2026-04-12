import styles from './Toast.module.css'

export default function Toast({ message, type = 'info', onClose }) {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.content}>
        <span>{message}</span>
        <button onClick={onClose}>✕</button>
      </div>
      <div className={styles.progress} />
    </div>
  )
}