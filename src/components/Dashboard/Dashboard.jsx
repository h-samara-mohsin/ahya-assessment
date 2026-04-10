import StatCards from './StatCards'
import './Dashboard.css'
import RevenueSection from './RevenueSection'

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* Page Title */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Executive Summary</h1>
          <p className="dashboard-subtitle">Deep dive into this month's curated performance metrics.</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-outline">📅 Last 30 Days</button>
          <button className="btn-primary">⬇ Export</button>
        </div>
      </div>

      {/* Stat Cards */}
      <StatCards />

      {/* Revenue Chart + Insight Card */}
      <RevenueSection />

      {/* Transactions Table */}
      {/* <TransactionsTable /> */}

    </div>
  )
}