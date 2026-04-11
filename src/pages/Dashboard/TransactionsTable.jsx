import { useState } from 'react'
import { transactions } from '../../data/dashboard'
import User1 from '../../assets/User-1.png'
import User2 from '../../assets/User-2.png'
import User3 from '../../assets/User-3.png'
import User4 from '../../assets/User.png'
import './TransactionsTable.css'

const avatarMap = { '1': User1, '2': User2, '3': User3, '4': User4 }

const statusConfig = {
  Active:    { color: 'status-active',    dot: '#16a34a' },
  Inactive:  { color: 'status-inactive',  dot: '#d97706' },
  Suspended: { color: 'status-suspended', dot: '#dc2626' },
}

export default function TransactionsTable(){
    const [sortField, setSortField] = useState(null)
    const [sortDir, setSortDir] = useState('asc')
    const [activeTab, setActiveTab] = useState('Active')

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortDir('asc')
        }
    }

    const getSortIcon = (field) => {
        if (sortField !== field) return ' ↕'
        return sortDir === 'asc' ? '↑' : '↓'
    }

    const sorted = [...transactions].sort((a, b) => {
    if (!sortField) return 0
    const valA = a[sortField]
    const valB = b[sortField]
    if (valA < valB) return sortDir === 'asc' ? -1 : 1
    if (valA > valB) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  return(
    <div className='table-section'>
        {/* Table Header */}
      <div className="table-top">
        <h3 className="table-title">Recent Transactions</h3>
        <div className="table-tabs">
          {['Active', 'Pending'].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable wrapper for mobile */}
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('name')} className="sortable">USER{getSortIcon('name')}</th>
                        <th onClick={() => handleSort('status')} className="sortable">STATUS{getSortIcon('status')}</th>
                        <th onClick={() => handleSort('lastActive')} className="sortable">LAST ACTIVE{getSortIcon('lastActive')}</th>
                        <th onClick={() => handleSort('revenue')} className="sortable">REVENUE{getSortIcon('revenue')}</th>
                    </tr>
                </thead>
                <tbody>
                   {sorted.map(tx => {
                    const status = statusConfig[tx.status] 
                    return (
                        <tr key={tx.id}>
                            {/* user cell */}
                            <td>
                                <div className='user-cell'>
                                    <img src={avatarMap[tx.avatar]} alt={tx.name} className='table-avatar' />
                                    <div className="user-details">
                                        <span className="user-name">{tx.name}</span>
                                        <span className="user-email">{tx.email}</span>
                                    </div>
                                </div>
                            </td>
                            {/* status cell */}
                            <td>
                                <span className={`status-badge ${status.color}`}>
                                    <span className="status-dot" style={{ backgroundColor: status.dot }} />
                                    {tx.status}
                                </span>
                            </td>
                            {/* last active cell */}
                            <td>{tx.lastActive}</td>
                            {/* revenue cell */}
                            <td>{tx.revenue}</td>
                        </tr>
                    )
                   }) }
                </tbody>
            </table>
        </div>
    </div>
  )
} 