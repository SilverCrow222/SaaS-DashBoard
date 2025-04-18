function UserPopup() {
  return (
    <div className="user-popup">
      <p>
        <strong>John Doe</strong>
      </p>
      <p className="role">🧑‍💼 Role: Admin</p>

      <hr />

      <div>
        <p>⚙️ Account Settings</p>
        <p>🔒 Change Password</p>
        <p>🚪 Logout</p>
      </div>
    </div>
  );
}

export default UserPopup;
