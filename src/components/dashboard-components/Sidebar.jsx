import { React } from "react";
import "../../styles/Sidebar.css";
import { SidebarData } from "../../utils/SidebarData";
import { useNavigate, useLocation } from "react-router-dom";
import { UserData } from "../../utils/UserData";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="user">
        <img src={UserData.image} alt="profile" className="user-icon" />
        <p>{UserData.username}</p>
      </div>
      <hr />
      <ul className="sidebar-list">
        {SidebarData.map((data, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                navigate(data.link);
              }}
              className="sidebar-items"
              id={location.pathname === data.link ? "sidebar-items-active" : ""}
            >
              {/* <div className="sidebar-icon">{data.icon}</div> */}
              <div className="sidebar-title">{data.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
