import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from 'axios';
//Redux Stuff
import { useDispatch } from "react-redux";
import { logoutUser } from '../redux/actions/authenticationActions';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = localStorage.AuthToken;
  useEffect(() => {
    if(token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutUser());
        window.location.href = "/";
      } else {
        dispatch({ type: 'SET_AUTHENTICATED' });
        axios.defaults.headers.common["Authorization"] = token;
      }
    } 
  }, [dispatch, token]);
  return <>{children}</>;
};

export default AuthProvider;