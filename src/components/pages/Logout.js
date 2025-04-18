function Logout({ isCollapsed }) {
  return (
    <div className={`content ${isCollapsed ? "expanded" : ""}`}>
      <div className="logout-page">
        <div className="logout-box">
          <h2>Are you sure you want to log out?</h2>
          <p>
            This will end your current session and redirect you to the login
            page.
          </p>
          <div className="logout-buttons">
            <button className="btn logout-confirm">Yes, Log Me Out</button>
            <button className="btn logout-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
