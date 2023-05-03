import { Link, useNavigate } from "react-router-dom";
import "./sidebar.scss";
import {
  // AutoGraphOutlined,
  // CardGiftcardOutlined,
  // Computer,
  Dashboard,
  Logout,
  // PersonOutlined,
  PersonOutlineOutlined,
  // ProductionQuantityLimits,
  // RingVolume,
  // Settings,
  // SystemSecurityUpdate,
  // TimeToLeave,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setTableType } from "../../redux/features/table-type";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <Link to={"/"}>
        <div className="top">
          <span className="logo">BRICS+</span>
        </div>
      </Link>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/"}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title">USERS</p>
          </Link>

          <li onClick={() => dispatch(setTableType("RegisteredUsers"))}>
            <PersonOutlineOutlined className="icon" />
            <span> Registered</span>
          </li>

          <li onClick={() => dispatch(setTableType("SelectedUsers"))}>
            <PersonOutlineOutlined className="icon" />
            <span>Selected</span>
          </li>

          <li onClick={() => dispatch(setTableType("RejectedUsers"))}>
            <PersonOutlineOutlined className="icon" />
            <span>Rejected</span>
          </li>

          <li onClick={() => dispatch(setTableType("PerformingUsers"))}>
            <PersonOutlineOutlined className="icon" />
            <span>Performing</span>
          </li>

          {/* <li>
            <CardGiftcardOutlined className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ProductionQuantityLimits className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <TimeToLeave className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <AutoGraphOutlined className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <RingVolume className="icon" />
            <span>Notifications</span>
          </li> */}
          {/* <p className="title">SERVICE</p>

          <li>
            <Computer className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SystemSecurityUpdate className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>

          {/* <li>
            <PersonOutlined className="icon" />
            <span>Profile</span>
          </li> */}

          <li onClick={handleLogout}>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <span className="color-options">Color options</span>
        <div className="colorOption"></div>
        <div className="colorOption"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
