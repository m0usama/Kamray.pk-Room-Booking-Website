import React from 'react';
import {Link} from "react-router-dom";



const Modellogin =()=> {

    return(
        <div style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://images.unsplash.com/photo-1654169761064-95b4c1e2be6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`
        }}>
        <div className="container">
            <br/>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-body p-4 py-5 p-md-5">
                        <h3 className="text-center mb-3">Welcome Back!</h3>
                        <ul className="ftco-footer-social p-0 text-center">

                            <li className="ftco-animate"><a href="https://web.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUwNzA3MjM4LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D" data-toggle="tooltip"
                                                            data-placement="top" title="Facebook"><span
                                className="ion-logo-facebook"></span></a></li>
                            <li className="ftco-animate"><a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" data-toggle="tooltip"
                                                            data-placement="top" title="Google"><span
                                className="ion-logo-google"></span></a></li>
                        </ul>
                        <form action="#" className="signup-form">

                            <div className="form-group mb-2">
                                <label htmlFor="email">Email Address</label>
                                <input type="text" className="form-control"
                                       placeholder="Email"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-group mb-2">
                                <button type="submit"
                                        className="form-control btn btn-primary rounded submit px-3"> Log In
                                </button>
                            </div>

                            <div className="form-group d-md-flex">
                                <div className="w-100 text-center" >
                                    <Link to="/forgotPassword" ><a href="#" className="forgot"  style={{color:'blue'}}>Forgot Password?</a></Link>
                                </div>
                            </div>
                            <div className="form-group d-md-flex">
                                <div className="w-100 text-center">
                                    <Link to="/Signup" ><a href="#" className="forgot" style={{color:'blue'}}>Don't have an account</a></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>


        </div>
            </div>
    );

}
export default Modellogin