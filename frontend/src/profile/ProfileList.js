import React, { Component, useState } from 'react';
import './UStyle.css';
import Profile from './Profile';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const ProfileList = () => {
  const [cookies, setCookie] = useCookies();
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const [result, setResult] = useState();
  setEmail(cookies.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.get('auth/profile', {
        email,
      });
      setResult(res);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  handleSubmit();
  const obj = {
    username: result.username,
    email: result.email,
    profileimage: result.profileimage,
  };
  return <Profile props={obj} />;
};

export default ProfileList;


