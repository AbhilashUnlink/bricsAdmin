import { KeyboardArrowRight, PersonOutline } from "@mui/icons-material";
import "./widget.scss";
import { useDispatch } from "react-redux";
import { setTableType } from "../../redux/features/table-type";
import { Button } from "@mui/material";

const Widget = ({ userData }) => {
  let data;
  //Temp

  switch (userData?.type) {
    case "RegisteredUsers":
      data = {
        title: "Registered Users",
        type: "RegisteredUsers",
        link: "See all registered users >",
        icon: (
          <PersonOutline
            className="icon"
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
      data = {
        title: "Selected Users",
        type: "SelectedUsers",
        link: "View all selected users >",
        icon: (
          <PersonOutline
            className="icon"
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
      data = {
        title: " Rejected Users",
        type: "RejectedUsers",
        link: "View all Rejected Users >",
        icon: (
          <PersonOutline
            className="icon"
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
      data = {
        title: "Performing User",
        type: "PerformingUsers",
        link: "See all Performing users >",
        icon: (
          <PersonOutline
            className="icon"
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
  const dispatch = useDispatch();
  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data?.title}</div>
        <div className="counter">{userData.count}</div>
        <Button
          onClick={() => dispatch(setTableType(data?.type))}
          className="link"
        >
          {data?.link}
        </Button>
      </div>
      <div className="right">
        <div className="percentage positive ">
          <KeyboardArrowRight />
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
