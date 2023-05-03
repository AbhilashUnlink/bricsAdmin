import "./navbar.scss";
import logo from "../../assets/faces/374australia.jpg";
import { PersonOutline } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const tablesType = useSelector((store) => store?.tableType?.tableType);
  console.log(tablesType);
  let table;
  switch (tablesType) {
    case "RegisteredUsers":
      table = {
        title: "Registered Users",
        icon: (
          <PersonOutline
            className="table-type-icon"
            style={{
              color: "yellow",
              cursor: "pointer",
              backgroundColor: "#bcbcbc",
            }}
          />
        ),
      };
      break;
    case "SelectedUsers":
      table = {
        title: "Selected Users",
        icon: (
          <PersonOutline
            className="table-type-icon"
            style={{
              color: "green",
              cursor: "pointer",
              backgroundColor: "#caf7ca",
            }}
          />
        ),
      };
      break;
    case "RejectedUsers":
      table = {
        title: " Rejected Users",
        icon: (
          <PersonOutline
            className="table-type-icon"
            style={{
              color: "crimson",
              cursor: "pointer",
              backgroundColor: "#fac8c8",
            }}
          />
        ),
      };
      break;
    case "PerformingUsers":
      table = {
        title: "Participanting User",
        icon: (
          <PersonOutline
            className="table-type-icon"
            style={{
              color: "blue",
              cursor: "pointer",
              backgroundColor: "#cdcdff",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <div className="table-title">
            <>
              {table?.icon}
              {table?.title}
            </>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <div className="avatar">
              <img src={logo} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
