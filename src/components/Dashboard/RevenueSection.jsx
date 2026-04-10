import { chartData } from '../../data/dashboard'
import './RevenueSection.css'

export default function RevenueSection() {
  const maxValue = Math.max(...chartData.map(d => Math.max(d.current, d.previous)))

  return (
    <div className="revenue-section">

      {/* Left — Bar Chart */}
      <div className="chart-card">
        <div className="chart-header">
          <h3 className="chart-title">Revenue Growth</h3>
          <div className="chart-legend">
            <span className="legend-item current">
              <span className="legend-dot filled" /> Current
            </span>
            <span className="legend-item previous">
              <span className="legend-dot outline" /> Previous
            </span>
          </div>
        </div>

        {/* Bars */}
        <div className="chart-bars">
          {chartData.map((item) => (
            <div key={item.day} className="bar-group">
              <div className="bars">
                {/* Previous bar — behind */}
                <div
                  className="bar previous"
                  style={{ height: `${(item.previous / maxValue) * 100}%` }}
                />
                {/* Current bar — in front */}
                <div
                  className="bar current"
                  style={{ height: `${(item.current / maxValue) * 100}%` }}
                />
              </div>
              <span className="bar-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Insight Card */}
      <div className="insight-card">
        <span className="insight-badge">NEW INSIGHTS</span>
        <h3 className="insight-title">
          Machine learning detected a 14% anomaly in User Retention.
        </h3>
        <p className="insight-body">
          Most active users are coming from Central Europe. Would you like to optimize servers for that region?
        </p>
        <button className="insight-btn">Investigate Now</button>
      </div>

    </div>
  )
}