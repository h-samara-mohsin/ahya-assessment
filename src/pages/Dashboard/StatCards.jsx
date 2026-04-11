import { stats } from '../../data/dashboard'
import './StatCards.css'

export default function StatCards() {
  return (
    <div className="stat-cards">
      {stats.map(stat => (
        <div key={stat.id} className="stat-card">

          <div className="stat-top">
            <img src={stat.icon} alt={stat.label} className="stat-icon" />
            <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
              {stat.positive ? '↗' : '↘'} {stat.change}
            </span>
          </div>

          <p className="stat-label">{stat.label}</p>
          <p className="stat-value">{stat.value}</p>

        </div>
      ))}
    </div>
  )
}