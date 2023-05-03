import Users from "../../pages/users/Users";
import "./chart.scss";

const Charts = ({ userData }) => {
  return (
    <div className="chart">
      <Users userData={userData} />
    </div>
  );
};

export default Charts;
