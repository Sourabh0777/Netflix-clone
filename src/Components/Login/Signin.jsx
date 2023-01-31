import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./Signin.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signupp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((userCredential) => {
      // Signed in
      const user_details_object = userCredential.user;
      console.log(user_details_object);
      // ...
    })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user_details_object = userCredential.user;
        console.log(user_details_object);
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="new_to_netflix">New to Netflix? </span>
          <span className="sign_up_now" onClick={signupp}>
            {" "}
            Sign up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default Signin;
