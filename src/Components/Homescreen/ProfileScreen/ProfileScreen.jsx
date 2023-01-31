import React from "react";
import "./ProfileScreen.css";

import NavBar from "../NavBar/NavBar";
import PlanScreen from "./PlanScreen";

import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

import { auth } from "../../../firebase";


const ProfileScreen = () => {
  const selector = useSelector(selectUser);
  console.log(selector.email);
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{selector.email}</h2>
            <div className="profileScreen_plans">
              <h2>Plans (Current Plan: Premium)</h2>
              <PlanScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
