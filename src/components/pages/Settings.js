function Settings({ isCollapsed, enableLightMode, enableDarkMode }) {
  return (
    <div className={`content ${isCollapsed ? "expanded" : ""}`}>
      <div className="settings-section">
        <h2>Profile Settings</h2>

        <div className="setting-item">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="setting-item">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="setting-item">
          <label>Change Password:</label>
          <input type="password" placeholder="********" />
          <button className="change-btn">Change</button>
        </div>

        <div className="setting-item">
          <label>Avatar Upload:</label>
          <input type="file" />
          <button className="upload-btn">Upload</button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Preferences</h2>

        <div className="setting-item">
          <label htmlFor="theme">Theme:</label>
          <div className="theme-toggle">
            <button className="theme-btn" onClick={enableLightMode}>
              ☀️ Light
            </button>
            <button className="theme-btn" onClick={enableDarkMode}>
              🌙 Dark
            </button>
          </div>
        </div>

        <div className="setting-item">
          <label htmlFor="language">Language:</label>
          <select id="language" className="language-select">
            <option>English</option>
            <option>Arabic</option>
            <option>Spanish</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Notifications:</label>
          <div className="notifications-options">
            <label>
              <input type="checkbox" /> Email
            </label>
            <label>
              <input type="checkbox" /> SMS
            </label>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Account Actions</h2>

        <div className="action-buttons">
          <button className="save-btn">Save Changes</button>
          <button className="reset-btn">Reset to Defaults</button>
        </div>

        <div className="danger-zone">
          <h3>Danger Zone</h3>
          <button className="delete-btn">🗑 Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
