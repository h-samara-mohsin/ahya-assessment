
import styles from './Input.module.css'

export default function Input({ label, helperText,error, leftIcon,rightIcon,className = '',id,...rest }) {
    
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
        <div className={`${styles.wrapper} ${className}`}>   
            {/* Label */}
            {label && <label className={styles.label} htmlFor={inputId}>
                {label}
            </label>}

            {/* Input Row */}
            <div className={`${styles.inputRow} ${error ? styles.hasError : ''}`}>
                {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
                <input
                    id={inputId}
                    className={`${styles.input} ${leftIcon ? styles.withLeftIcon : ''} ${rightIcon ? styles.withRightIcon : ''}`}
                    {...rest}
                />
                {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
            </div>

            {/* Helper or Error text */}
            {error && (
                <span className={styles.errorText}>
                    {error}
                </span>

            )}
            {!error && helperText && (
                <span className={styles.helperText}>
                    {helperText}
                </span>
            )}
           
        </div>
    )
}