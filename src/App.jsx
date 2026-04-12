import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import MultiStepForm from './pages/MultiStepForm'
import Products from './pages/Products'
import ComponentLibrary from './pages/ComponentLibrary'


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
          {activeNav === 'dashboard' && <Dashboard />}
          {activeNav === 'users' && <MultiStepForm />}
          {activeNav === 'analytics' && <Products />}
          {activeNav === 'reports' && <ComponentLibrary />}
        </main>
      </div>
    </div>
  )
}

export default App
