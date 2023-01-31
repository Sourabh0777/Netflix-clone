//React
import React, { useEffect } from 'react';
// Screens 
import './app.css';
import HomeScreen from './Components/Homescreen/HomeScreen';
import ProfileScreen from './Components/Homescreen/ProfileScreen/ProfileScreen';
import Login from "./Components/Login/Login";
//React Router
import { Routes, Route } from "react-router-dom";
//Fire base 
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import db from './firebase'
// Redux 
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { login, logout } from './features/userSlice';

function App() {
  const selector = useSelector(selectUser);
console.log(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user_login_details_object) => {
      if (user_login_details_object) {
        dispatch(
          login({
            uid: user_login_details_object.uid,
            email: user_login_details_object.email,
          })
        )
        console.log(user_login_details_object);
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  //************************/
  console.log(selector);
  //************************/
  return (
    <div className="app">
      {!selector ? (<Login />) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile/" element={<ProfileScreen />} />
          
          <Route path="/login/" element={<Login />} />

        </Routes>
      )}


    </div>
  );
}

export default App;
