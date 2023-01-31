import React, { useState } from "react";
import "./Login.css";
import Signin from "./Signin";

const Login = () => {
  const [sigin, setSignin] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="./images/Netflix-logo-red-black-png.png"
          alt=""
        />
        <button className="login_screen_button" onClick={() => setSignin(true)}>
          Sign In
        </button>

        <div className="login_gradiant"></div>

        <div className="login_screen_body">
          {sigin ? (
            <Signin />
          ) : (
            <>
              <h1 className="Signup_text">
                Unlimited movies, TV shows and more.
              </h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="login_inputform">
                <form action="">
                  <input
                    className="login_inputField"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="loginscreen_button_getStarted"
                    onClick={() => setSignin(true)}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>

      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
      <h1>This IS just test text </h1>
    </div>
  );
};

export default Login;
