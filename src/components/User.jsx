import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/user/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);
  console.log(user);

  const getUserData = () => {
    dispatch(setUserData({ name: "wei", age: 24 }));
  };

  return (
    <div>
      <h1>User Component</h1>
      <button onClick={getUserData}>Get User Data</button>
      <h3>name : {user?.name}</h3>
      <h3>age : {user?.age}</h3>
    </div>
  );
};

export default User;
