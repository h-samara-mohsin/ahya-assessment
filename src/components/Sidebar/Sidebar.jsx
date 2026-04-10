import { useState } from 'react'
import { LayoutDashboard, BarChart2, FileText, Users, Settings, Grid2x2, Plus, ChevronLeft } from 'lucide-react'
import { navItems } from '../../data/dashboard'
import './Sidebar.css'

const iconMap = {
  dashboard: LayoutDashboard,
  analytics: BarChart2,
  reports: FileText,
  users: Users,
  settings: Settings,
}

export default function Sidebar({ activeNav, setActiveNav, isCollapsed, setIsCollapsed }) {
    console.log('Sidebar render - activeNav:', activeNav, 'isCollapsed:', isCollapsed)
    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-logo">
                <div className="logo-icon">
                    <Grid2x2 size={20} />
                </div>
                {!isCollapsed && <span className="logo-text">Sample Logo</span>}
                <button className="collapse-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
                    <ChevronLeft size={16} className={isCollapsed ? 'rotated' : ''} />
                </button>
            </div>
            <nav className="sidebar-nav">
                {navItems.map(item => {
                    const Icon = iconMap[item.icon]
                    return (
                        <button
                            key={item.id}
                            className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                            onClick={() => setActiveNav(item.id)}
                            title={isCollapsed ? item.label : ''}
                        >
                            <Icon size={18} />
                            {!isCollapsed && <span>{item.label}</span>}
                        </button>
                    )
                })}
            </nav>
            <div className="sidebar-footer">
                <button className="new-insight-btn">
                    <Plus size={16} />
                    {!isCollapsed && <span>New Insight</span>}
                </button>
            </div>
        </aside>
    )
}