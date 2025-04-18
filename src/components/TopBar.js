import { useEffect } from "react";

function TopBar({
  isCollapsed,
  activePage,
  setActivePage,
  openPopup,
  togglePopup,
  setOpenPopup,
  toggleDarkMode,
}) {
  useEffect(() => {
    setOpenPopup(false);
  }, [activePage, setOpenPopup]);

  return (
    <div className={`topbar ${isCollapsed ? "expanded" : ""} `}>
      <div className="leftTop">
        <h3 className="LeftTopItem">{activePage} </h3>
        <h3 className="home-btn" onClick={() => setActivePage("Dashboard")}>
          Home
        </h3>
      </div>
      <div className="rightTop">
        <div className="notification-container">
          <h3
            onClick={() => togglePopup("notification")}
            className="notification-bell"
          >
            🔔
          </h3>
        </div>
        <div className="notification-container">
          <h3 onClick={() => togglePopup("user")} className="notification-bell">
            🙍‍♂️
          </h3>
        </div>
        <div className="notification-container">
          <h3 onClick={toggleDarkMode} className="notification-bell">
            🌓
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
