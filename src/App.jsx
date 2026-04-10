import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'


function App() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div style ={{ display: 'flex', height: '100vh' }}>
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div style={{flex:1, display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
        <Header />
        <main style={{flex:1 , overflowY:'auto',padding:'24px'}}>
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  )
}

export default App
