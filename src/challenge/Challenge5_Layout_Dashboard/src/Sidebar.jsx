import React, { useState } from "react";
import "./Sidebar.css";
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "❮" : "❯"}
      </button>

      <ul className="menu">
        <li>
          <MdDashboard className="icon" />
          {isOpen && <span>Dashboard</span>}
        </li>

        <li>
          <MdPeople className="icon" />
          {isOpen && <span>Users</span>}
        </li>

        <li>
          <MdSettings className="icon" />
          {isOpen && <span>Settings</span>}
        </li>

        <li>
          <MdLogout className="icon" />
          {isOpen && <span>Logout</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
