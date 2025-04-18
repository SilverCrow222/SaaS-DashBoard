import { useState } from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Content from "./components/Content";

import "./App.css";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [openPopup, setOpenPopup] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const enableDarkMode = () => setIsDarkMode(true);
  const enableLightMode = () => setIsDarkMode(false);

  const togglePopup = (type) => {
    setOpenPopup((prev) => (prev === type ? null : type));
  };

  function handleClick() {
    setIsCollapsed((prev) => !prev);
  }

  function handleSideBarClick(page) {
    setActivePage(page);
  }

  return (
    <div className={`app ${isDarkMode ? "dark" : ""}`}>
      <SideBar
        isCollapsed={isCollapsed}
        handleClick={handleClick}
        activePage={activePage}
        handleSideBarClick={handleSideBarClick}
        openPopup={openPopup}
        togglePopup={togglePopup}
      />
      <TopBar
        isCollapsed={isCollapsed}
        activePage={activePage}
        setActivePage={setActivePage}
        openPopup={openPopup}
        togglePopup={togglePopup}
        setOpenPopup={setOpenPopup}
        toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />
      <Content
        isCollapsed={isCollapsed}
        activePage={activePage}
        openPopup={openPopup}
        togglePopup={togglePopup}
        enableDarkMode={enableDarkMode}
        enableLightMode={enableLightMode}
      />
    </div>
  );
}

export default App;
