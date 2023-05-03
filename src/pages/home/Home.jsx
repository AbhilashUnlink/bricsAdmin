import React from "react";
import Charts from "../../components/charts/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
const Home = () => {
  // Api call for getting the users will come here and like this we will see the users list

  let userData = [
    {
      type: "RegisteredUsers",
      count: 200,
      users: [
        {
          id: 1,
          name: "Abhilash Registered",
          country: "India",
          phone: 1231123131,
          email: "abhilash@gmail.com",
        },
        {
          id: 2,
          name: "Honey Registered",
          country: "India",
          phone: 1231123131,
          email: "honey@gmail.com",
        },
      ],
    },
    {
      type: "SelectedUsers",
      count: 100,
      users: [
        {
          id: 1,
          name: "Abhilash Selected",
          country: "India",
          phone: 1231123131,
          email: "abhilash@gmail.com",
        },
        {
          id: 2,
          name: "Honey Selected",
          country: "India",
          phone: 1231123131,
          email: "honey@gmail.com",
        },
      ],
      // ........upto 100 users
    },
    {
      type: "RejectedUsers",
      count: 50,
      users: [
        {
          id: 1,
          name: "Abhilash Rejected",
          country: "India",
          phone: 1231123131,
          email: "abhilash@gmail.com",
        },
        {
          id: 2,
          name: "Shivam Rejected",
          email: "shivam@gmail.com",
          phone: "1231231231",
          country: "india",
        },
        // ......upto 50 users
      ],
    },
    {
      type: "PerformingUsers",
      count: 20,
      users: [
        {
          id: 1,
          name: "Abhilash Perfoming",
          country: "India",
          phone: 1231123131,
          email: "abhilash@gmail.com",
        },
      ],
    },
  ];
  return (
    <div className="home dark">
      <Sidebar userData={userData} />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {userData.map((data, index) => (
            <Widget userData={data} key={index} />
          ))}
        </div>
        <div className="charts">
          <Charts userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
