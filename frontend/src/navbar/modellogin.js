import React, {Component} from 'react';



export default class Modellogin extends Component {

    render() {

        let modelStyle ={
            display : 'block',
            backgroundColor: 'rgba(0,0,0,0.8)'
        }

        return (

            <div className="modal show fade shadow" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={this.props.hide} aria-label="Close"></button>
                        </div>
                        <div >

                        </div>
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
                                        <a href="#" className="forgot" style={{color:'blue'}}>Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-100 text-center">
                                        <a href="#" className="forgot" style={{color:'blue'}}>Don't have an account</a>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>

                    <div className="row justify-content-between" style={{padding:"2px"}}>
                        <div className="col">

                        </div>
                        <div className="col">

                        </div>

                    </div>
                </div>


            </div>

        );
    }
}
