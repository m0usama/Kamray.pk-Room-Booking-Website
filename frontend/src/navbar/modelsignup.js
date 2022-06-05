import './ionicons.min.css';
import './style.css';
import React, { Component, useState } from 'react';
import './ionicons.min.css';
import './style.css';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Modelsignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
      <div className="container">
        <br />
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body p-4 py-5 p-md-5">
              <h3 className="text-center mb-3">Create Your Account</h3>
              <ul className="ftco-footer-social p-0 text-center">
                <li className="ftco-animate">
                  <a
                      href="https://web.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUwNzA3MjM4LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                  >
                    <span className="ion-logo-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                      href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Google"
                  >
                    <span className="ion-logo-google"></span>
                  </a>
                </li>
              </ul>
              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label htmlFor="name">Full Name</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-100 text-center">
                    <a href="#." className="forgot">
                      I'm already a member
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row justify-content-between" style={{ padding: '2px' }}>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
  );
};

export default Modelsignup;
