import React, {Component} from 'react';



const ForgotPass =()=> {

        return (

            <div>
                <section className="breadcrumb_area">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                         data-background=""></div>

                </section>

                <div className="container">

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Old Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                                placeholder="Old Password"/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">New Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"
                               placeholder="New Password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword3">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword3"
                               placeholder="Confirm Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Change Password</button>

                </div>
            </div>


        );
}

export default ForgotPass
