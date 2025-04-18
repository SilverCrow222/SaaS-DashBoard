function SideBar({
  isCollapsed,
  handleClick,
  handleSideBarClick,
  activePage,
  openPopup,
}) {
  return (
    <div className={`sideBar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="heading">
        <h1 className={isCollapsed && "hidden"}>Dashboard</h1>
        <button className="toggle-btn" onClick={handleClick}>
          {isCollapsed ? "➤" : " ❮ "}
        </button>
      </div>
      <div className="nav">
        <div
          className={`sidebaritem ${
            activePage === "dashboard" ? "active" : ""
          }`}
          onClick={() => handleSideBarClick("Dashboard")}
        >
          <span className="icon">🏠</span>
          {!isCollapsed && <span className="label">Dashboard</span>}
        </div>
        <div
          className={`sidebaritem ${activePage === "Users" ? "active" : ""}`}
          onClick={() => handleSideBarClick("Users")}
        >
          <span className="icon">👤</span>
          {!isCollapsed && <span className="label">Users</span>}
        </div>
        <div
          className={`sidebaritem ${
            activePage === "Analytics" ? "active" : ""
          }`}
          onClick={() => handleSideBarClick("Analytics")}
        >
          <span className="icon">📊</span>
          {!isCollapsed && <span className="label">Analytics</span>}
        </div>
        <div
          className={`sidebaritem ${activePage === "Settings" ? "active" : ""}`}
          onClick={() => handleSideBarClick("Settings")}
        >
          <span className="icon">⚙️</span>
          {!isCollapsed && <span className="label">Settings</span>}
        </div>
        <div
          className={`sidebaritem ${activePage === "Logout" ? "active" : ""}`}
          onClick={() => handleSideBarClick("Logout")}
        >
          <span className="icon">🔓</span>
          {!isCollapsed && <span className="label">Logout</span>}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
