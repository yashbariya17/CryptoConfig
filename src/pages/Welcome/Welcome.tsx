import React from 'react';

import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h2>Finance Dashboard</h2>
          <p>Track your spending, savings, and growth in real time</p>
        </div>

        <div className="header-buttons">
          <button className="btn-outline">Reports</button>
          <button className="btn-outline">Settings</button>
          <button className="btn-primary">Export</button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid-3">
        {/* Previous Statement */}
        <div className="card hover-lift">
          <div className="card-header">
            <h4>Previous Statement</h4>
            <span className="dot-menu">⋮</span>
          </div>

          <p className="status-text success-text">Paid on February 6, 2022</p>

          <div className="card-row">
            <div>
              <span className="label">Card Limit</span>
              <h3>$34,500.00</h3>
            </div>
            <div>
              <span className="label">Spent</span>
              <h3>$27,221.21</h3>
            </div>
            <div>
              <span className="label">Minimum</span>
              <h4>$7,331.94</h4>
            </div>
          </div>
          <div className="progress-bar mt-3">
            <div className="progress-fill" style={{ width: '79%' }}></div>
          </div>
          <p className="progress-label">79% of limit used</p>
        </div>

        {/* Current Statement */}
        <div className="card hover-lift">
          <div className="card-header">
            <h4>Current Statement</h4>
            <span className="dot-menu">⋮</span>
          </div>

          <p className="status-text danger-text">Due March 6, 2022</p>

          <div className="card-row">
            <div>
              <span className="label">Card Limit</span>
              <h3>$34,500.00</h3>
            </div>
            <div>
              <span className="label">Spent</span>
              <h3 className="text-danger">$39,819.41</h3>
            </div>
            <div>
              <span className="label">Minimum</span>
              <h4>$9,112.51</h4>
            </div>
          </div>
          <div className="progress-bar mt-3">
            <div className="progress-fill danger" style={{ width: '100%' }}></div>
          </div>
          <p className="progress-label text-danger">Over limit by $5,319.41</p>
        </div>

        {/* Account Balance with Line Chart */}
        <div className="card large-card hover-lift">
          <div className="card-header">
            <h4>Account Balance</h4>
            <button className="tag active">12 months</button>
          </div>

          <div className="account-stats">
            <div>
              <p className="label">Avg. Monthly Growth</p>
              <h2 className="text-success">+38.33%</h2>
            </div>
            <div>
              <p className="label">Avg. Monthly Income</p>
              <h2>$45,332.00</h2>
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="chart-container">
            <svg className="line-chart" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0066ff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,80 Q40,60 75,50 Q110,40 150,30 Q190,35 225,25 Q260,20 300,15"
                fill="none"
                stroke="#0066ff"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M0,80 Q40,60 75,50 Q110,40 150,30 Q190,35 225,25 Q260,20 300,15 L300,100 L0,100 Z"
                fill="url(#gradient)"
              />
              <circle cx="150" cy="30" r="4" fill="#0066ff" />
              <circle cx="225" cy="25" r="4" fill="#0066ff" />
            </svg>
            <div className="chart-labels">
              <span>Jan</span>
              <span>Jun</span>
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid-3 bottom-grid">
        {/* Recent Transactions */}
        <div className="card col-span-2 hover-lift">
          <div className="flex-between">
            <div>
              <h4>Recent Transactions</h4>
              <p className="small-text">1 pending, 4 completed</p>
            </div>
            <button className="btn-text">View All →</button>
          </div>

          <table className="transactions-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mono">52865157INT</td>
                <td>Oct 08, 2019</td>
                <td>Morgan Page</td>
                <td className="text-success">+$1,358.75</td>
                <td>
                  <span className="badge success">COMPLETED</span>
                </td>
              </tr>
              <tr>
                <td className="mono">685377421YT</td>
                <td>Dec 25, 2019</td>
                <td>Marsha Chambers</td>
                <td className="text-warning">+$1,828.16</td>
                <td>
                  <span className="badge warning">PENDING</span>
                </td>
              </tr>
              <tr>
                <td className="mono">773829104AB</td>
                <td>Jan 14, 2020</td>
                <td>Devon Lane</td>
                <td className="text-success">+$2,104.50</td>
                <td>
                  <span className="badge success">COMPLETED</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Budget Summary with Donut Chart */}
        <div className="card hover-lift">
          <div className="card-header">
            <h4>Budget Overview</h4>
            <span className="dot-menu">⋮</span>
          </div>

          <p className="small-text">Last month: 223 expenses, 12 savings</p>

          <div className="donut-chart-container">
            <svg className="donut-chart" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#10b981"
                strokeWidth="3.5"
                strokeDasharray="65 100"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3.5"
                strokeDasharray="30 100"
                strokeDashoffset="-65"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
              <text x="18" y="18" className="donut-center">
                65%
              </text>
            </svg>
            <div className="donut-legend">
              <div>
                <span className="legend-color savings"></span> Savings: $10,974
              </div>
              <div>
                <span className="legend-color expenses"></span> Expenses: $11,763
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
