import { useState } from "react";
import { usersData } from "../../data/usersData.js";

function Users({ isCollapsed }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = usersData.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      user.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className={`content ${isCollapsed ? "expanded" : ""}`}>
      <div className="user">
        <h1>Users</h1>
        <p>Manage your users, view details, and take action.</p>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search users..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="filter-select"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="tableusers">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedUser(user)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedUser && (
          <>
            <div
              className="overlay"
              onClick={() => setSelectedUser(null)}
            ></div>

            <div className="user-details">
              <button
                className="close-btn"
                onClick={() => setSelectedUser(null)}
              >
                ×
              </button>
              <h3>User Details</h3>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Role:</strong> {selectedUser.role}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Join Date:</strong> {selectedUser.joinDate}
              </p>
              <p>
                <strong>Last Login:</strong> {selectedUser.lastLogin}
              </p>
              <p>
                <strong>Location:</strong> {selectedUser.location}
              </p>
              <p>
                <strong>Status:</strong>
                <span className={`status ${selectedUser.status.toLowerCase()}`}>
                  {selectedUser.status}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Users;
