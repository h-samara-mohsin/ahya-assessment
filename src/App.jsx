import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'


function App() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Mobile overlay — dark background when sidebar open */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 99
          }}
        />
      )}
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header onMenuToggle={() => setMobileOpen(!mobileOpen)} />
        <main style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
