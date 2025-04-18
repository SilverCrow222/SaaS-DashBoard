import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { analyticsData } from "../../data/analyticsData";

function Analytics({ isCollapsed }) {
  const { usersOverTimeData, roleData, statusData, recentActivities } =
    analyticsData;
  const COLORS = ["#1d4ed8", "#10b981", "#facc15"];

  return (
    <div className={`content ${isCollapsed ? "expanded" : ""}`}>
      <div className="analytics">
        <h1>Analytics</h1>
        <p>View insights and track user engagement across your platform.</p>
      </div>
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Users</h3>
          <p className="main-value">1,200</p>
          <span className="desc">All registered users</span>
        </div>
        <div className="summary-card">
          <h3>Active Users</h3>
          <p className="main-value">864</p>
          <span className="desc">Users logged in this month</span>
        </div>
        <div className="summary-card">
          <h3>New Signups</h3>
          <p className="main-value">76</p>
          <span className="desc">Joined in the last 7 days</span>
        </div>
        <div className="summary-card">
          <h3>Avg. Session Time</h3>
          <p className="main-value">5m 24s</p>
          <span className="desc">Average user session length</span>
        </div>
        <div className="summary-card">
          <h3>Total Events</h3>
          <p className="main-value">3,481</p>
          <span className="desc">Actions taken by users</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={usersOverTimeData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#1d4ed8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={roleData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {roleData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={statusData}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#1d4ed8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>

      <div className="activity-log">
        <h3>Recent Activity</h3>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>
              <strong>{activity.user}</strong> - {activity.action}{" "}
              <span>{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Analytics;
