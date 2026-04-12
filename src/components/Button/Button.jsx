import styles from './Button.module.css'


export default function Button({ children, variant = 'primary', size = 'md', loading = false, disabled = false, className = '', onClick, type = 'button' }) {
    return (
        <button
            type={type}
            className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading && <span className={styles.spinner} />}
            {children}
        </button>
    )
}