function Dashboard({ isCollapsed }) {
  return (
    <div className={`content ${isCollapsed ? "expanded" : ""}`}>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome back, Ahmed! Here's what's going on today</p>
      </div>
      <div className="stats">
        <div className="card">
          <span>📊</span>
          <h3>Users</h3>
          <p>1,204</p>
          <p>↑ 8% this week</p>
        </div>
        <div className="card">
          <span>💰</span>
          <h3>Revenue</h3>
          <p>$4,580</p>
          <p>↑ 12% this month</p>
        </div>
        <div className="card">
          <span>📦</span>
          <h3>Orders</h3>
          <p>328</p>
          <p>↑ 5% this week</p>
        </div>
        <div className="card">
          <span>🚨</span>
          <h3>Alerts</h3>
          <p>6</p>
          <p>↑ 2 from yesterday</p>
        </div>
      </div>
      <div className="chart">
        <h3 className="chartText">User Growth</h3>
        <div className="img">
          <img src="Excel-charts-11.png" alt="Chart placeholder" />
          <img src="Excel-charts-11.png" alt="Chart placeholder" />
        </div>
      </div>
      <div className="recent">
        <h3>Recent Activity</h3>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ahmed</td>
                <td>Signed up</td>
                <td>Apr 17, 2025</td>
                <td>
                  <span className="status success">Completed</span>
                </td>
              </tr>
              <tr>
                <td>Sara</td>
                <td>Submitted feedback</td>
                <td>Apr 16, 2025</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Updated profile</td>
                <td>Apr 15, 2025</td>
                <td>
                  <span className="status failed">Failed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
