import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import NotificationPopup from "./popups/NotificationPopup";
import UserPopup from "./popups/UserPopup";

function Content({
  isCollapsed,
  activePage,
  openPopup,
  togglePopup,
  enableLightMode,
  enableDarkMode,
}) {
  return (
    <>
      {openPopup === "notification" && <NotificationPopup />}

      {openPopup === "user" && <UserPopup />}

      {activePage === "Dashboard" && <Dashboard isCollapsed={isCollapsed} />}

      {activePage === "Users" && <Users isCollapsed={isCollapsed} />}

      {activePage === "Analytics" && <Analytics isCollapsed={isCollapsed} />}

      {activePage === "Settings" && (
        <Settings
          isCollapsed={isCollapsed}
          enableLightMode={enableLightMode}
          enableDarkMode={enableDarkMode}
        />
      )}

      {activePage === "Logout" && <Logout isCollapsed={isCollapsed} />}
    </>
  );
}

export default Content;
