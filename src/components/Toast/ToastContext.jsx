import { createContext, useContext, useState, useCallback } from 'react'
import Toast from './Toast'

const ToastContext = createContext()

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((toast) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, ...toast }])

    setTimeout(() => {
      removeToast(id)
    }, 3000)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 999 }}>
        {toasts.map(t => (
          <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

