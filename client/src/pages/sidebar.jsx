import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage sidebar collapse

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle sidebar state
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`d-flex flex-column p-3 bg-body-tertiary ${
          isCollapsed ? "collapsed" : "expanded"
        }`}
        style={{
          width: isCollapsed ? "80px" : "280px", // Shrink width when collapsed
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          transition: "width 0.3s ease", // Smooth transition
          zIndex: 1000, // Keep sidebar above content
        }}
      >
        {/* Toggle button */}
        <button
          className="btn btn-outline-secondary mb-3"
          onClick={toggleSidebar}
          style={{ marginLeft: isCollapsed ? "15px" : "auto", width: "100%" }}
        >
          {isCollapsed ? "☰" : "⇦"}
        </button>

        {!isCollapsed && (
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Dashboard</span>
          </Link>
        )}

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="items"
              className={`nav-link link-body-emphasis ${
                isCollapsed ? "text-center" : ""
              }`}
              title={isCollapsed ? "Add Items" : ""}
            >
              {isCollapsed ? "➕" : "Add Items"}
            </Link>
          </li>
          <li>
            <Link
              to="orders"
              className={`nav-link link-body-emphasis ${
                isCollapsed ? "text-center" : ""
              }`}
              title={isCollapsed ? "Orders" : ""}
            >
              {isCollapsed ? "📦" : "Orders"}
            </Link>
          </li>
          <li>
            <Link
              to="list-items"
              className={`nav-link link-body-emphasis ${
                isCollapsed ? "text-center" : ""
              }`}
              title={isCollapsed ? "List Items" : ""}
            >
              {isCollapsed ? "📃" : "List Items"}
            </Link>
          </li>
        </ul>
        <hr />
      </div>

      {/* Content Area */}
      <div
        className="content-area"
        style={{
          marginLeft: isCollapsed ? "80px" : "280px", // Adjust margin based on sidebar state
          padding: "20px",
          width: "100%",
          transition: "margin-left 0.3s ease", // Smooth transition for content
        }}
      >
        <Outlet /> {/* This renders the current route's component */}
      </div>
    </div>
  );
};

export default SideBar;
