import './UStyle.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const Profile = ({ props }) => {
  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={props.profileimage}
              />
              <span className="font-weight-bold">{props.username}</span>
              <span className="text-black-50">{props.email}</span>
              <span> </span>
            </div>
          </div>

          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>{' '}
                  <span className="labels"> {props.username}</span>
                </div>

                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <span className="labels">Malik</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <span className="labels"> 0445-53453453</span>
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <span className="labels">45345</span>
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <span className="labels">lahore</span>
                </div>
                <div className="col-md-12">
                  <label className="labels">Area</label>
                  <span className="labels"> punjab</span>
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <span className="labels">{props.story.email}</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <span className="labels"> Pakistan</span>
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <span className="labe ls"> Lahore</span>
                </div>
              </div>{' '}
              <br />
              <Link to="/updateprofile">
                <a href="#." className="btn theme_btn button_hover">
                  Update Profile
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
