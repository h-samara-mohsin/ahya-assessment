import { useEffect, useRef } from "react"
import styles from "./Modal.module.css"

export default function Modal({ isOpen, onClose, title, children , footer, className}) {
    const modalRef = useRef (null)

     // Close on Escape key
    useEffect(() => {
        if (!isOpen) return

        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    // Focus first focusable element when modal opens

    useEffect(() => {
        if(!isOpen) return

       const focusable = modalRef.current?.querySelector(
      'button, input, textarea, select, a[href]'
    )
    focusable?.focus()
    }, [isOpen])

    // Prevent body scroll when modal open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {document.body.style.overflow = '' }
    }, [isOpen])
      
    if (!isOpen) return null

     return (
    // Overlay — click closes modal
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      {/* Content — click does NOT close */}
      <div
        ref={modalRef}
        className={`${styles.modal} ${className}`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >

        {/* Header */}
        <div className={styles.header}>
          <h3 id="modal-title" className={styles.title}>{title}</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {children}
        </div>

        {/* Footer — only render if provided */}
        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}

      </div>
    </div>
  )
}